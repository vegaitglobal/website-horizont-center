from django.contrib.auth.forms import UserCreationForm
from django.utils.translation import gettext_lazy as _
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from rest_framework.authtoken.models import TokenProxy
from apps.common.admin import ModelAdminMixin
from apps.users.models import User

admin.site.unregister(Group)
admin.site.unregister(TokenProxy)


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = (User.USERNAME_FIELD,)


@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdminMixin):
    list_display = (
        'email',
        'profile_type',
        'is_active',
        'is_staff',
        'is_superuser',
        'first_name',
        'last_name',
        'phone_number',
        'second_phone_number'
    )
    search_fields = (
        'first_name',
        'last_name',
        'email',
    )
    ordering = ('email',)

    add_form = CreateUserForm
    fieldsets = (
        (None, {
            'fields': ('id', 'email', 'password')
        }),
        (_('Personal info'), {
            'fields': ('first_name', 'last_name',)
        }),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser',),
        }),
        (_('Important dates'), {
            'fields': ('last_login', 'date_joined',)
        }),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    readonly_fields = (
        'last_login',
        'date_joined',
    )

    def profile_type(self, obj: User) -> str:
        return obj.get_profile_type() or '-' if obj else '-'

    profile_type.short_description = _('profile type')

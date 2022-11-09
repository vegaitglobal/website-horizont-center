from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from apps.common.admin import ModelAdminMixin
from apps.users.models import AbstractProfile


class AbstractProfileAdmin(admin.ModelAdmin, ModelAdminMixin):

    def user(self, obj: AbstractProfile = None) -> str:
        return str(obj.user)

    user.short_description = _('user')

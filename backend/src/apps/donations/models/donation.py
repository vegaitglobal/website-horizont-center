from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import BaseModel


class Donation(BaseModel):
    class Meta:
        verbose_name = _('Donation')
        verbose_name_plural = _('Donations')
        ordering = (
            '-is_active',
            '-created',
        )

    title = models.CharField(
        verbose_name=_('title'),
        max_length=250
    )
    subtitle = models.CharField(
        verbose_name=_('subtitle'),
        max_length=250
    )
    image = models.ImageField(
        verbose_name=_('cover image'),
        upload_to='images/donations/donation',
        null=True,
        help_text=_('Recommended image resolution is 1920×1080 (HD) or higher.')
    )
    description = models.TextField(
        validators=[
            MinLengthValidator(limit_value=100)
        ],
        verbose_name=_('description'),
    )
    is_active = models.BooleanField(
        verbose_name=_('is active'),
        default=True
    )

    def __str__(self):
        return self.title

from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.users.models.abstract_profile import AbstractProfile


class BeneficiaryProfile(AbstractProfile):
    class Meta:
        verbose_name = _('Beneficiary profile')
        verbose_name_plural = _('Beneficiary profiles')

    beneficiary_person = models.CharField(
        verbose_name=_('beneficiary person'),
        max_length=250
    )
    helping_period = models.CharField(
        verbose_name=_('helping period'),
        max_length=250
    )
    weekly_days = models.IntegerField(
        verbose_name=_('weekly days')
    )
    daily_hours = models.FloatField(
        verbose_name=_('daily hours')
    )
    care_type = models.CharField(
        max_length=250,
        verbose_name=_('care type')
    )

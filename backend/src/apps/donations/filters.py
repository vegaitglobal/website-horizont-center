from django_filters import CharFilter, BooleanFilter
from django_filters.rest_framework import FilterSet
from apps.donations.models import Donation


class DonationFilterSet(FilterSet):
    contains = CharFilter(field_name='title', lookup_expr='icontains')
    is_active = BooleanFilter(field_name='is_active')
    is_financial = BooleanFilter(field_name='financial_info', lookup_expr='isnull', exclude=True)

    class Meta:
        model = Donation
        fields = [
            'title',
            'is_active',
            'is_financial',
        ]

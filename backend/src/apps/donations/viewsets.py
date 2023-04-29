from django.db.models import QuerySet
from django_filters import rest_framework as filters
from apps.donations.filters import DonationFilterSet
from apps.donations.models import Donation
from apps.donations.serializers import DonationSerializer
from apps.common.viewsets import ViewSet


class DonationViewSet(ViewSet):
    model_class = Donation
    serializer_class = DonationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = DonationFilterSet

    def filter_queryset(self, queryset) -> QuerySet:
        return super().filter_queryset(queryset=queryset.order_by('-is_active', '-created'))

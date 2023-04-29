from django.db.models import QuerySet
from django_filters import rest_framework as filters
from apps.blogs.filters import BlogFilterSet
from apps.blogs.models import Blog
from apps.blogs.serializers.blog_serializer import BlogSerializer
from apps.common.viewsets import ViewSet


class BlogViewSet(ViewSet):
    model_class = Blog
    serializer_class = BlogSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BlogFilterSet

    def filter_queryset(self, queryset) -> QuerySet:
        return super().filter_queryset(queryset=queryset.filter(is_published=True))

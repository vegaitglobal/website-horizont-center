import os
from django.core.wsgi import get_wsgi_application

environment = os.getenv('APP_ENV', 'production').lower()

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'caregivers.settings.{environment}')

application = get_wsgi_application()

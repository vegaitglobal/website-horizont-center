# Python imports
import sys
from copy import deepcopy
from django.utils.log import DEFAULT_LOGGING
from django.utils.translation import gettext_lazy as _
from os import getenv
from os.path import abspath, basename, dirname, join, normpath

# ##### PATH CONFIGURATION ################################

# fetch Django's project directory
DJANGO_ROOT = dirname(dirname(abspath(__file__)))

# fetch the project_root
PROJECT_ROOT = dirname(DJANGO_ROOT)

# the name of the whole site
SITE_NAME = basename(DJANGO_ROOT)

# collect static files here
STATIC_ROOT = join(PROJECT_ROOT, 'run', 'static')

# collect media files here
MEDIA_ROOT = join(PROJECT_ROOT, 'run', 'media')

# look for static assets here
STATICFILES_DIRS = [
    join(PROJECT_ROOT, 'static'),
]

# look for templates here
# This is an internal setting, used in the TEMPLATES directive
PROJECT_TEMPLATES = [
    join(PROJECT_ROOT, 'templates'),
]

# add apps/ to the Python path
sys.path.append(normpath(join(PROJECT_ROOT, 'apps')))

# ##### APPLICATION CONFIGURATION #########################
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = getenv('EMAIL_HOST_PASSWORD')

# these are the apps
DEFAULT_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # third party apps:
    'rest_framework',
    'corsheaders',
    'rest_framework.authtoken',
    'colorfield',

    # local apps:
    'apps.common',
    'apps.users',
    'apps.donations',
    'apps.blogs',
]

# Middlewares
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# template stuff
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': PROJECT_TEMPLATES,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.request',
            ],
        },
    },
]

# ##### SECURITY CONFIGURATION ############################
FE_APP_ORIGIN = getenv('CORS_ALLOWED_ORIGIN')
CORS_ALLOWED_ORIGINS = [
    FE_APP_ORIGIN,
]

# We store the secret key here
# The required SECRET_KEY is fetched at the end of this file
SECRET_FILE = normpath(join(PROJECT_ROOT, 'run', 'SECRET.key'))

# these persons receive error notification

# ##### DJANGO RUNNING CONFIGURATION ######################

# the default WSGI application
WSGI_APPLICATION = '%s.wsgi.application' % SITE_NAME

# the root URL configuration
ROOT_URLCONF = '%s.urls' % SITE_NAME

# the URL for static files
STATIC_URL = '/static/'

# the URL for media files
MEDIA_URL = '/media/'

# ##### DEBUG CONFIGURATION ###############################
DEBUG = False

# finally grab the SECRET KEY
try:
    SECRET_KEY = open(SECRET_FILE).read().strip()
except IOError:
    try:
        from django.utils.crypto import get_random_string

        chars = 'abcdefghijklmnopqrstuvwxyz0123456789!$%&()=+-_'
        SECRET_KEY = get_random_string(50, chars)
        with open(SECRET_FILE, 'w') as f:
            f.write(SECRET_KEY)
    except IOError:
        raise Exception('Could not open %s for writing!' % SECRET_FILE)

AUTH_USER_MODEL = 'users.User'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': getenv('DB_NAME'),
        'USER': getenv('DB_USERNAME'),
        'PASSWORD': getenv('DB_PASSWORD'),
        'HOST': getenv('DB_HOSTNAME'),
        'PORT': 5432,
    }
}

# ######## Internationalization and localization ################

LOCALE_PATHS = (
    join(PROJECT_ROOT, 'run', 'locale'),
)

LANGUAGE_CODE = 'sr-latn'

LANGUAGES = [
    ('sr-latn', _('Serbian (latin)')),
]

TIME_ZONE = 'Europe/Belgrade'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# ###### DJANGO REST FRAMEWORK ###########################
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'apps.users.authentication.TokenAuthentication',
    ]
}

ALLOWED_HOST = getenv('ALLOWED_HOST')
ALLOWED_HOSTS = [
    ALLOWED_HOST,
]
DJANGO_PORT = getenv('DJANGO_PORT')
CSRF_TRUSTED_ORIGINS = [getenv('CSRF_TRUSTED_ORIGIN', f'http://{ALLOWED_HOST}')]

# Disable error emails:
#   - based on: https://lincolnloop.com/insights/disabling-error-emails-django/
logging_dict = deepcopy(DEFAULT_LOGGING)
logging_dict['loggers']['django']['handlers'] = ['console']
LOGGING = logging_dict

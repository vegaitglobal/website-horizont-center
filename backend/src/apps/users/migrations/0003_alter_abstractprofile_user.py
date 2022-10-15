# Generated by Django 4.1.2 on 2022-10-15 11:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_abstractprofile_user_created_user_modified_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='abstractprofile',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, unique=True, verbose_name='user'),
        ),
    ]

# Generated by Django 4.1.2 on 2023-04-30 08:24

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_caregiverprofile_linkedin_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiaryprofile',
            name='description',
            field=models.TextField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(limit_value=100)], verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='caregiverprofile',
            name='description',
            field=models.TextField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(limit_value=100)], verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(max_length=250, validators=[django.core.validators.RegexValidator(message='Enter a valid phone number.', regex='^[0-9+\\(\\)#\\.\\s\\/ext-]+$')], verbose_name='phone number'),
        ),
        migrations.AlterField(
            model_name='user',
            name='second_phone_number',
            field=models.CharField(blank=True, max_length=250, null=True, validators=[django.core.validators.RegexValidator(message='Enter a valid phone number.', regex='^[0-9+\\(\\)#\\.\\s\\/ext-]+$')], verbose_name='second phone number'),
        ),
    ]

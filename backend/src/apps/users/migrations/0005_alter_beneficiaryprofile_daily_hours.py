# Generated by Django 4.1.2 on 2022-10-15 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_abstractprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiaryprofile',
            name='daily_hours',
            field=models.FloatField(verbose_name='daily hours'),
        ),
    ]
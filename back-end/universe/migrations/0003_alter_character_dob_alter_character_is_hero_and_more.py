# Generated by Django 4.0.1 on 2022-01-27 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universe', '0002_alter_character_background_alter_character_dob_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='is_hero',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='is_villain',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]

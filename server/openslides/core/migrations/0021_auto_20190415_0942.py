# Generated by Django 2.1.5 on 2019-04-15 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("core", "0020_set_reference_projector")]

    operations = [
        migrations.AlterField(
            model_name="projector",
            name="name",
            field=models.CharField(max_length=255, unique=True),
        )
    ]
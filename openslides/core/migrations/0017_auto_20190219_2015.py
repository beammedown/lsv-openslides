# Generated by Django 2.1.5 on 2019-02-19 19:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("core", "0016_projector_reference_projector")]

    operations = [
        migrations.AlterModelOptions(
            name="history",
            options={
                "default_permissions": (),
                "permissions": (("can_see_history", "Can see history"),),
            },
        )
    ]
# Generated by Django 4.0.2 on 2022-02-11 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('DB', 'Drops backward'), ('ST', 'Status'), ('OT', 'Other'), ('ML', 'Melee'), ('FB', 'Shoots forward or backward'), ('SF', 'Shoots forward'), ('LS', 'Lock-on shot')], max_length=2),
        ),
    ]

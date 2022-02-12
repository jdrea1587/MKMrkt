# Generated by Django 4.0.2 on 2022-02-12 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0023_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('OT', 'Other'), ('LS', 'Lock-on shot'), ('ST', 'Status'), ('ML', 'Melee'), ('DB', 'Drops backward'), ('SF', 'Shoots forward'), ('FB', 'Shoots forward or backward')], max_length=2),
        ),
    ]

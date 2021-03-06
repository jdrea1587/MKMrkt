# Generated by Django 4.0.2 on 2022-02-13 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0031_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('SF', 'Shoots forward'), ('ML', 'Melee'), ('LS', 'Lock-on shot'), ('ST', 'Status'), ('OT', 'Other'), ('DB', 'Drops backward'), ('FB', 'Shoots forward or backward')], max_length=2),
        ),
    ]

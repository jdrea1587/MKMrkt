# Generated by Django 4.0.2 on 2022-02-13 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0034_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('LS', 'Lock-on shot'), ('OT', 'Other'), ('DB', 'Drops backward'), ('ST', 'Status'), ('ML', 'Melee'), ('SF', 'Shoots forward'), ('FB', 'Shoots forward or backward')], max_length=2),
        ),
    ]

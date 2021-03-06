# Generated by Django 4.0.2 on 2022-02-14 02:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0043_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('SF', 'Shoots forward'), ('LS', 'Lock-on shot'), ('FB', 'Shoots forward or backward'), ('DB', 'Drops backward'), ('ML', 'Melee'), ('OT', 'Other'), ('ST', 'Status')], max_length=2),
        ),
    ]

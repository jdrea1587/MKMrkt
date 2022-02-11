# Generated by Django 4.0.2 on 2022-02-11 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0010_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('FB', 'Shoots forward or backward'), ('OT', 'Other'), ('SF', 'Shoots forward'), ('LS', 'Lock-on shot'), ('DB', 'Drops backward'), ('ST', 'Status'), ('ML', 'Melee')], max_length=2),
        ),
    ]

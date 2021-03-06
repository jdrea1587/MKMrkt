# Generated by Django 4.0.2 on 2022-02-11 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0006_alter_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='item',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='product',
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('ML', 'Melee'), ('LS', 'Lock-on shot'), ('SF', 'Shoots forward'), ('DB', 'Drops backward'), ('OT', 'Other'), ('FB', 'Shoots forward or backward'), ('ST', 'Status')], max_length=2),
        ),
    ]

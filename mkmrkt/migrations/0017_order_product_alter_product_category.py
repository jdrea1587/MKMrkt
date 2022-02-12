# Generated by Django 4.0.2 on 2022-02-12 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0016_alter_product_category_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ManyToManyField(related_name='ordered_products', to='mkmrkt.OrderItem'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('DB', 'Drops backward'), ('OT', 'Other'), ('ML', 'Melee'), ('LS', 'Lock-on shot'), ('FB', 'Shoots forward or backward'), ('ST', 'Status'), ('SF', 'Shoots forward')], max_length=2),
        ),
    ]

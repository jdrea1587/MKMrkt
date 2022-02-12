# Generated by Django 4.0.2 on 2022-02-12 03:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mkmrkt', '0018_remove_order_product_order_products_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='created_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitem',
            name='created_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('OT', 'Other'), ('LS', 'Lock-on shot'), ('SF', 'Shoots forward'), ('DB', 'Drops backward'), ('ST', 'Status'), ('ML', 'Melee'), ('FB', 'Shoots forward or backward')], max_length=2),
        ),
    ]

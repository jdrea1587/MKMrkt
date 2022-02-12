# Generated by Django 4.0.2 on 2022-02-12 02:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0017_order_product_alter_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product',
        ),
        migrations.AddField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='orderitems', to='mkmrkt.OrderItem'),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orderitems', to='mkmrkt.order'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('FB', 'Shoots forward or backward'), ('SF', 'Shoots forward'), ('ST', 'Status'), ('ML', 'Melee'), ('LS', 'Lock-on shot'), ('OT', 'Other'), ('DB', 'Drops backward')], max_length=2),
        ),
    ]
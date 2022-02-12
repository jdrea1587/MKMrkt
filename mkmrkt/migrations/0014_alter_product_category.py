# Generated by Django 4.0.2 on 2022-02-11 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mkmrkt', '0013_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('DB', 'Drops backward'), ('ML', 'Melee'), ('SF', 'Shoots forward'), ('OT', 'Other'), ('ST', 'Status'), ('FB', 'Shoots forward or backward'), ('LS', 'Lock-on shot')], max_length=2),
        ),
    ]
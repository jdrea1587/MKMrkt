from django.conf import settings
from django.db import models

# Create your models here.

# ADDRESS_CHOICES = (
#     ('B', 'BILLING'),
#     ('S', 'SHIPPING'),
# )

CATEGORY_CHOICES = {
    ('LS', 'Lock-on shot'),
    ('SF', 'Shoots forward'),
    ('DB', 'Drops backward'),
    ('FB', 'Shoots forward or backward'),
    ('ML', 'Melee'),
    ('ST', 'Status'),
    ('OT', 'Other'),
}

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=225, db_index=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    in_stock = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    products = models.ManyToManyField('OrderItem', related_name='orderitems', blank=True)
    email = models.EmailField()
    address = models.CharField(max_length=150)
    postal_code = models.CharField(max_length=30)
    city = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='orderitems')
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name

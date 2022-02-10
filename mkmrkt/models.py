from django.conf import settings
from django.db import models

# Create your models here.

ADDRESS_CHOICES = (
    ('B', 'BILLING'),
    ('S', 'SHIPPING'),
)

CATEGORY_CHOICES = {
    ('LS', 'Lock-on shot'),
    ('SF', 'Shoots forward'),
    ('DB', 'Drops backward'),
    ('FB', 'Shoots forward or backward'),
    ('ML', 'Melee'),
    ('ST', 'Status'),
    ('OT', 'Other'),
}

class Address(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=100)
    address_line2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    mobile = models.CharField(max_length=100)
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=225, db_index=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='assets/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    in_stock = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class OrderItem(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name


class Order(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    item = models.ManyToManyField(OrderItem)
    guest_first_name = models.CharField(max_length=60)
    guest_last_name = models.CharField(max_length=60)
    email = models.EmailField()
    address = models.CharField(max_length=150)
    postal_code = models.CharField(max_length=30)
    city = models.CharField(max_length=100)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.name

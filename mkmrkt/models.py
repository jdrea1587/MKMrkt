from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
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
    ('OT', 'Other')
}

# MAY NOT NEED USERNAME AND PASSWORD HERE
class User(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                            on_delete=models.CASCADE)
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
    name = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=225, db_index=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class OrderItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                            on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)                        
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                            on_delete=models.CASCADE)
    item = models.ManyToManyField(OrderItem)
    first_name = models.CharField(max_length=60)
	last_name = models.CharField(max_length=60)
	email = models.EmailField()
	address = models.CharField(max_length=150)
	postal_code = models.CharField(max_length=30)
	city = models.CharField(max_length=100)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.name
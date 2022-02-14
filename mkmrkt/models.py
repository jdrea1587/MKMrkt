from django.conf import settings
from django.db import models
from django.urls import reverse

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
    slug = models.SlugField(max_length=225, db_index=True, unique=True)
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

    # def get_absolute_url(self):
    #     return reverse('product_detail', kwargs={'slug': self.slug})

class Order(models.Model):
    first_name = models.CharField(max_length=60, blank=True)
    last_name = models.CharField(max_length=60, blank=True)
    products = models.ManyToManyField('OrderItem', related_name='orderitems', blank=True)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=150, blank=True)
    postal_code = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.quantity} of {self.product.name}'

from django.contrib import admin

from .models import OrderItem, Product, Order

@admin.register(Product)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'slug', 'description', 'image', 'price', 'created', 'updated']
    list_filter = ['in_stock', 'is_active']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Order)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'created', 'updated', 'ordered']
    list_filter = ['ordered']

@admin.register(OrderItem)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'order', 'product', 'price', 'quantity']

   
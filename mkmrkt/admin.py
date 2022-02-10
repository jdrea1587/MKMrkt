from django.contrib import admin

from .models import Product

@admin.register(Product)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'description', 'image', 'price', 'created', 'updated']
    list_filter = ['in_stock', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
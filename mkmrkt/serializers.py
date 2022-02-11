from rest_framework import serializers
from .models import Product, OrderItem, Order

class ProductSerializer(serializers.HyperlinkedModelSerializer):             
    # order_item = serializers.HyperlinkedRelatedField(
    #     view_name ='order_item_detail',
    #     many=True,
    #     read_only=True,
    # )

    product_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='product_detail',
    )

    class Meta:
        model = Product
        fields = ('category', 'name', 'slug', 'description', 'image', 'price', 'available', 'in_stock', 'is_active', 'created', 'updated', 'product_url' )

class OrderSerializer(serializers.HyperlinkedModelSerializer):

    orderitem = serializers.HyperlinkedRelatedField(
        view_name='orderitem_detail',
        read_only=True,
    )

    order_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_detail',
    )

    class Meta:
        model = Order
        fields = ('first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'created', 'updated', 'ordered', 'orderitem', 'order_url')


class OrderItemSerializer(serializers.HyperlinkedModelSerializer):

    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True,
    )

    orders = serializers.HyperlinkedRelatedField(
        view_name='order_detail',
        read_only=True,
    )

    order_item_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_item_detail',
    )

    class Meta:
        model = OrderItem
        fields = ('product', 'price', 'quantity', 'order', 'orders', 'products', 'order_item_url')




        # left user out of meta fields for now

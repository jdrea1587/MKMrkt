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
        fields = ('id', 'category', 'name', 'slug', 'description', 'image', 'price', 'available', 'in_stock', 'is_active', 'created', 'updated', 'product_url' )

class OrderSerializer(serializers.HyperlinkedModelSerializer):

    order_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_detail',
    )

    class Meta:
        model = Order
        fields = ('id', 'first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'created', 'updated', 'ordered', 'products', 'order_url')
        extra_kwargs = {'products': {'required' : False}}


class OrderItemSerializer(serializers.HyperlinkedModelSerializer):

    product = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        queryset=Product.objects.all()
    )    
    order = serializers.HyperlinkedRelatedField(
        view_name='order_detail',
        queryset=Order.objects.all()
    )
    orderitem_url = serializers.ModelSerializer.serializer_url_field(
        view_name='orderitem_detail',
    )

    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'quantity', 'order', 'orderitem_url')




        # left user out of meta fields for now

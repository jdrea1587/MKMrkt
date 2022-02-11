from rest_framework import serializers
from .models import Address, Product, OrderItem, Order

class AddressSerializer(serializers.HyperlinkedModelSerializer):

    orders = serializers.HyperlinkedRelatedField(
        view_name ='order_detail',
        many=True,
        read_only=True,
    )

    address_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='address_detail',
        many=True,
        read_only=True,
    )

    class Meta:
        model = Address
        fields = ('address_line1', 'address_line2', 'city', 'orders'
                  'postal_code', 'country', 'mobile', 'address_type', 'address_url')

class ProductSerializer(serializers.HyperlinkedModelSerializer):             
    # order_item = serializers.HyperlinkedRelatedField(
    #     view_name ='order_item_detail',
    #     many=True,
    #     read_only=True,
    # )

    product_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='product_detail',
        # many=True,
        # read_only=True,
    )

    class Meta:
        model = Product
        fields = ('category', 'name', 'slug', 'description', 'image', 'price', 'available', 'in_stock', 'is_active', 'created', 'product_url' )

class OrderItemSerializer(serializers.HyperlinkedModelSerializer):

    # products = serializers.HyperlinkedRelatedField(
    #     view_name='product_detail',
    #     many=True,
    #     read_only=True,
    # )

    orders = serializers.HyperlinkedRelatedField(
        view_name='order_detail',
        many=True,
        read_only=True,
    )

    order_item_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_item_detail',
        many=True,
        read_only=True,
    )

    class Meta:
        model = OrderItem
        fields = ('product', 'price', 'quantity', 'products', 'orders', 'order_item_url')


class OrderSerializer(serializers.HyperlinkedModelSerializer):

    orderitem = serializers.HyperlinkedRelatedField(
        view_name='orderitem_detail',
        many=True,
        read_only=True,
    )

    addresses = serializers.HyperlinkedRelatedField(
        view_name='address_detail',
        many=True,
        read_only=True,
    )

    order_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_detail',
        many=True,
        read_only=True,
    )

    class Meta:
        model = Order
        fields = ('item', 'first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'start_date', 'ordered_date', 'ordered')


        # left user out of meta fields for now

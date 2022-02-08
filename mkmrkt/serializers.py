from rest_framework import serializers
from .models import User, Address, Product, OrderItem, Order


class UsersSerializer(serializers.HyperlinkedModelSerializer):
    addresses = serializers.HyperlinkedRelatedField(
        view_name='address_detail'
    )

    orders = serializers.HyperlinkedRelatedField(
        view_name='order_detail'
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='user_detail'
    )

    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class AddressSerializer(serializers.HyperlinkedModelSerializer):
    users = serializers.HyperlinkedRelatedField(
        view_name ='user_detail'
    )

    orders = serializers.HyperlinkedRelatedField(
        view_name ='order_detail'
    )

    address_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='address_detail'
    )

    class Meta:
        model = Address
        fields = ('users', 'address_line1', 'address_line2', 'city', 'orders'
                  'postal_code', 'country', 'mobile', 'address_type', 'address_url')

class ProductSerializer(serializers.HyperlinkedModelSerializer):             
    order_item = serializers.HyperlinkedRelatedField(
        view_name ='order_item_detail'
    )

    product_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='product_detail'
    )

    class Meta:
        model = Product
        fields = ('category', 'name', 'slug', 'description', 'image', 'price', 'available', 'order_item', 'product_url' )

class OrderItemSerializer(serializers.HyperlinkedModelSerializer):

    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail'
    )

    orders = serializers.HyperlinkedRelatedField(
        view_name='order_detail'
    )

    order_item_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_item_detail'
    )

    class Meta:
        model = OrderItem
        fields = ('product', 'price', 'quantity', 'products', 'orders', 'order_item_url')


class OrderSerializer(serializers.HyperlinkedModelSerializer):

    users = serializers.HyperlinkedRelatedField(
        view_name ='user_detail'
    )

    orderitem = serializers.HyperlinkedRelatedField(
        view_name='orderitem_detail'
    )

    addresses = serializers.HyperlinkedRelatedField(
        view_name='address_detail'
    )

    order_url = serializers.ModelSerializer.serializer_url_field(
        view_name='order_detail'
    )

    class Meta:
        model = Order
        fields = ('item', 'first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'start_date', 'ordered_date', 'ordered')


        # left user out of meta fields for now

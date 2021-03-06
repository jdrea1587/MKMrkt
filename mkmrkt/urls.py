from django.urls import path
from .import views


urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product_list'),
    path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail'),
    path('orders/', views.OrderList.as_view(), name='order_list'),
    path('orders/<int:pk>', views.OrderDetail.as_view(), name='order_detail'),
    path('orderitem/', views.OrderItemList.as_view(), name='orderitem_list'),
    path('orderitem/<int:pk>', views.OrderItemDetail.as_view(), name='orderitem_detail')
]

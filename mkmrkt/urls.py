from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product_list'),
    path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail'),
    path('orders/', views.OrderList.as_view(), name='order_list'),
    path('orders/<int:pk>', views.OrderDetail.as_view(), name='order_detail'),
    # Login / Log Out
    path('accounts/login/',
         auth_views.LoginView.as_view(template_name='accounts/login.html'),
         name='login'),
    path('accounts/logout/',
         auth_views.LogoutView.as_view(template_name='accounts/logout.html'),
         name='logout'),


]

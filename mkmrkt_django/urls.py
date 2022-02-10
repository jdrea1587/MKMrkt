
from django.conf.urls import include
from django.urls import path
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mkmrkt.urls')),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
]


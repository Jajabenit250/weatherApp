from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('weather/', admin.site.urls),
]

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from all_in_one import settings
from . import views

urlpatterns = [
    path('', views.hello),
    path('api/addpanier', views.addToDb),
    
]
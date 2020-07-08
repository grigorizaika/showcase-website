from django.contrib import admin
from django.urls import path

from . import views

app_name = 'demos'

urlpatterns = [
    path('', views.demo_list, name='demo_list'),
]

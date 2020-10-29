from django.urls import path, include
from . import views
from .views import PostView

urlpatterns = [
  #  path('', views.home, name="home"),

    path('', PostView.as_view(), name="index"),]
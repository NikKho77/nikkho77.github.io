from django.shortcuts import render
from django.views.generic import ListView,DetailView
from .models import Post
# Create your views here.

class PostView(ListView):
    model = Post
    template_name = 'index.html'
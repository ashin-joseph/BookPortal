from django.shortcuts import render
from rest_framework import viewsets
from .models import movieDB
from .serializers import movieSERIAL

class movieViewSets(viewsets.ModelViewSet):
    serializer_class = movieSERIAL
    queryset = movieDB.objects.all()
    model= movieDB

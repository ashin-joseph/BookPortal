from rest_framework import serializers
from .models import movieDB

class movieSERIAL(serializers.ModelSerializer):
    class Meta:
        model = movieDB
        fields ='__all__'
        read_only_fields =["id"]

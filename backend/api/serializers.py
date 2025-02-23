from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Event, Ticket

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        
class EventSerializer(serializers.ModelSerializer):
    startTime = serializers.DateTimeField(source='start_time') 
    endTime = serializers.DateTimeField(source='end_time')
    class Meta:
        model = Event
        fields = [
            'id', 'author', 'title', 'overview', 'description', 'imgURL', 
            'location', 'startTime', 'endTime'
        ]
        extra_kwargs = {"author": {"read_only": True}}

    def validate(self, data):
        print("Serializer received data:", data) 
        return data

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = "__all__"
        extra_kwargs = {"event": {"read_only": True}}
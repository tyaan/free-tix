from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, EventSerializer, TicketSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Event, Ticket
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class EventListCreate(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class PublicEventListView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    authentication_classes = [] 
    permission_classes = [] 

class PublicEventDetailView(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    authentication_classes = []  
    permission_classes = []

class EventDelete(generics.DestroyAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserInfoView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
      user = request.user
      return Response({
          'isAuthenticated': True,
          'user': {
              'username': user.username,
              'email': user.email,
          }
      })


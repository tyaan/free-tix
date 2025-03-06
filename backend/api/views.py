from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer, EventSerializer, TicketSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Event, Ticket
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Public Views
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
class PublicTicketListByEventView(ListAPIView):
    serializer_class = TicketSerializer

    def get_queryset(self):
        event_id = self.kwargs["event_id"] 
        return Ticket.objects.filter(event_id=event_id)

# Private Views
class EventListView(ListAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(author=user)
  
# Creates a new event with one ore more tickets. 
# Will not add event to databse if either event or any of the ticeket serializers fail validation
class CreateEventWithTicketsView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        event_data = request.data.get('event')  
        ticket_data = request.data.get('tickets') 

        # Check data exists
        if not event_data or not ticket_data:
            return Response({"error": "Both event and tickets data are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        if not isinstance(ticket_data, list):
            return Response({"error": "Expected a list of tickets"}, status=status.HTTP_400_BAD_REQUEST)

        # Check serializers are valid
        event_serializer = EventSerializer(data=event_data)
        if not event_serializer.is_valid():
            return Response(event_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        tickets = []
        for ticket_data_item in ticket_data:
            ticket_serializer = TicketSerializer(data=ticket_data_item)
            tickets.append(ticket_serializer)
            if not ticket_serializer.is_valid():
              return Response(ticket_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Add data
        event = event_serializer.save(author=request.user)

        for ticket in tickets:  
          ticket.validated_data['event'] = event
          ticket.save()

        return Response({
            "message": "Event and tickets created successfully!",
            "event": event_serializer.data,
            "tickets": [ticket.data for ticket in tickets]
        }, status=status.HTTP_201_CREATED)
    
class EventDelete(DestroyAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(author=user)
    
class CreateUserView(CreateAPIView):
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


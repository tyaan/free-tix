from django.urls import path
from . import views

urlpatterns = [
  path("events/public/", views.PublicEventListView.as_view(), name="public-events"),
  path("events/public/<int:pk>/", views.PublicEventDetailView.as_view(), name="public-event-detail"),
  path("tickets/<int:event_id>/", views.PublicTicketListByEventView.as_view(), name="tickets-by-event"),

  path("events/", views.EventListView.as_view(), name="event-list"),
  path("events/create", views.CreateEventWithTicketsView.as_view(), name='add_tickets'),
  path("event/delete/<int:pk>/", views.EventDelete.as_view(), name="delete-event"),
]
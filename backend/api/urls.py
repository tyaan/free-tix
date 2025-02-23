from django.urls import path
from . import views

urlpatterns = [
  path("events/public/", views.PublicEventListView.as_view(), name="public-events"),
  path("events/public/<int:pk>/", views.PublicEventDetailView.as_view(), name="public-event-detail"),
  path("events/", views.EventListCreate.as_view(), name="event-list"),
  path("event/delete/<int:pk>/", views.EventDelete.as_view(), name="delete-event"),
]
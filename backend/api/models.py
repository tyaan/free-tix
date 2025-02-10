from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    eventID = models.IntegerField()
    title = models.CharField(max_length=100)
    overview = models.TextField(max_length=100)
    description = models.TextField()
    imgURL = models.URLField()
    location = models.TextField(max_length=100)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    ticketID = models.IntegerField()


    def __str__(self):
        return self.title

class Ticket(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='tickets')
    ticketID = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField(max_length=100)

    def __str__(self):
        return self.event.title + " - " + str(self.ticketID)
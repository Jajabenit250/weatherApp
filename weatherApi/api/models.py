from django.db import models

# Create your models here.
class WeatherLog(models.Model):
     sessionDetails = models.CharField(max_length=32)
     sessionLat = models.CharField(max_length=32)
     sessionLong = models.CharField(max_length=32)
     sessionTime = models.TimeField(auto_now_add=True)
     city = models.CharField(max_length=32)
     country = models.CharField(max_length=32)

from rest_framework import viewsets
from .serializers import WeatherLogSerializer
from .models import WeatherLog

class WeatherLogViewSets(viewsets.ModelViewSet):
    queryset = WeatherLog.objects.all()
    serializer_class = (WeatherLogSerializer)

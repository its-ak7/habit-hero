from django.shortcuts import render
from rest_framework import viewsets
from .models import Habit
from .serializers import HabitSerializer

# Create your views here.

class HabitViewSet(viewsets.ModelViewSet):

    queryset=Habit.objects.all().order_by('id')
    serializer_class=HabitSerializer



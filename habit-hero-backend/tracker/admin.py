from django.contrib import admin
from .models import Habit

# Register your models here.

@admin.register(Habit)

class HabitAdmin(admin.ModelAdmin):

    list_display=['id','name','category','frequency','start_date','completed']
    list_filter=['category','frequency','completed']
    search_fields=['name']

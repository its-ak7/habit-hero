from django.db import models

# Create your models here.

class Habit(models.Model):

    CATEGORY_CHOICES=[ 
        ('health', 'Health'),
        ('work' , 'Work'),
        ('learning', 'Learning ')
    ]

    FREQUENCY_CHOICES=[
        ('daily', 'Daily'),
        ('weekly', 'Weekly')
    ]

    name=models.CharField(max_length=100)
    category=models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    frequency=models.CharField(max_length=10, choices=FREQUENCY_CHOICES)
    start_date=models.DateField(auto_now_add=True)
    completed=models.BooleanField(default=False)

    def __str__(self):
        return self.name

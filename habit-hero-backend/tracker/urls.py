from rest_framework import routers
from .views import HabitViewSet

router=routers.DefaultRouter()

router.register('habits',HabitViewSet)

urlpatterns = router.urls

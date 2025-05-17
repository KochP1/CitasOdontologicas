from django.urls import path
from .views import CitaView

urlpatterns = [
    path('crear_citas/', CitaView.as_view(), name='citas'),
]

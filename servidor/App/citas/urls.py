from django.urls import path
from .views import CitaView, DetailCita

urlpatterns = [
    path('crear_citas/', CitaView.as_view(), name='citas'),
    path('modificar_cita/<int:pk>', DetailCita.as_view(), name='modificar_cita')
]

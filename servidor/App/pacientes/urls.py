from django.urls import path
from .views import PacienteView

urlpatterns = [
    path('crear_paciente/', PacienteView.as_view(), name='crear_paciente'),
]

from django.urls import path
from .views import PacienteView, ModificarPaciente

urlpatterns = [
    path('crear_paciente/', PacienteView.as_view(), name='crear_paciente'),
    path('modificar_paciente/<int:pk>', ModificarPaciente.as_view(), name='modificar_paciente')
]

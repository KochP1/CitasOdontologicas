from django.urls import path
from .views import DoctorView, DoctorUpdate

urlpatterns = [
    path('crear_doctor/', DoctorView.as_view(), name='crear_doctor'),
    path('modificar_doctor/<int:pk>', DoctorUpdate.as_view(), name='modificar_doctor')
]
from django.urls import path
from .views import DoctorView

urlpatterns = [
    path('crear_doctor/', DoctorView.as_view(), name='crear_doctor')
]

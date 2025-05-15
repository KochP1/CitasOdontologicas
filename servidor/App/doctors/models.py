from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Doctor(models.Model):
    usuario = models.ForeignKey(User, related_name='usuario_doctor', on_delete=models.CASCADE)
    especialidad = models.CharField(max_length=25)
    telefono = models.CharField(max_length=15)
    dirección = models.CharField(max_length=40)
    vacaciones = models.BooleanField(default=False)
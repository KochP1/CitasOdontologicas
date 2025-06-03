from django.db import models

# Create your models here.
class Doctor(models.Model):
    nombre = models.CharField(max_length=20, null=True)
    segundo_nombre = models.CharField(max_length=20, null=True)
    apellido = models.CharField(max_length=25, null=True)
    segundo_apellido = models.CharField(max_length=25, null=True)
    especialidad = models.CharField(max_length=25)
    telefono = models.CharField(max_length=15)
    dirección = models.CharField(max_length=40)
    vacaciones = models.BooleanField(default=False)
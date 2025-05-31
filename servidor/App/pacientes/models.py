from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Paciente (models.Model):
    nombre = models.CharField(max_length=20, null=True)
    segundo_nombre = models.CharField(max_length=20, null=True)
    apellido = models.CharField(max_length=25, null=True)
    segundo_apellido = models.CharField(max_length=25, null=True)
    telefono = models.CharField(max_length=15)
    dirección = models.CharField(max_length=40)
    historia_medica = models.TextField(null=True)

class RegistroMedico(models.Model):
    paciente = models.ForeignKey(Paciente, related_name='registro_medico', on_delete=models.CASCADE)
    fecha = models.DateField()
    diagnosis = models.TextField(max_length=60)
    tratamiento = models.TextField(max_length=60)

{
    "nombre": "Juan",
    "segundo_nombre": "Carlos",
    "apellido": "Koch",
    "segundo_apellido": "Gonzales",
    "telefono": "04141139537",
    "dirección": 'Bellavista',
    "historia_medica": "a"
}
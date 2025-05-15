from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Paciente (models.Model):
    usuario = models.ForeignKey(User, related_name='usuario_paciente', on_delete=models.CASCADE)
    telefono = models.CharField(max_length=15)
    email = models.EmailField()
    dirección = models.CharField(max_length=40)
    historia_medica = models.TextField(null=True)

class RegistroMedico(models.Model):
    paciente = models.ForeignKey(Paciente, related_name='registro_medico', on_delete=models.CASCADE)
    fecha = models.DateField()
    diagnosis = models.TextField(max_length=60)
    tratamiento = models.TextField(max_length=60)
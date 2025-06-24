from django.db import models
from pacientes.models import Paciente
from doctors.models import Doctor

# Create your models here.
class Citas(models.Model):
    doctor = models.ForeignKey(Doctor, related_name='cita_doctor', on_delete=models.CASCADE)
    paciente = models.ForeignKey(Paciente, related_name='cita_paciente', on_delete=models.CASCADE)
    fecha = models.DateField()
    hora = models.TimeField()
    hora_final = models.TimeField(null=True)
    dia = models.TextField(null = True)
    es_activa = models.BooleanField(default=True)

from rest_framework import serializers

from .models import Citas
from pacientes.serializers import PacienteSerializer
from doctors.serializers import ObtenerDoctores


class CitasSeializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = '__all__'

class ObtenerCitasSerializer(serializers.ModelSerializer):
    doctor = ObtenerDoctores(read_only=True)
    paciente = PacienteSerializer(read_only=True)

    class Meta:
        model = Citas
        fields = "__all__"
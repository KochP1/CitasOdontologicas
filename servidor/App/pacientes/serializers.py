from rest_framework import serializers
from .models import Paciente, RegistroMedico

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'

class RegistroMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroMedico
        fields = '__all__'
from rest_framework import serializers
from django.contrib.auth.models import User
from doctors.models import Doctor

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')

# Serializadores específicos por grupo
class DoctorDataSerializer(serializers.ModelSerializer):
    usuario = UserInfoSerializer(read_only=True)
    class Meta:
        model = Doctor
        fields = [
            'id',
            'usuario',
            'especialidad',
            'telefono',
            'dirección',
            'vacaciones'
        ]
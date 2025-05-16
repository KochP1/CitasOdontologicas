from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User, Group
from .models import Doctor



class DoctorSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length = 150)
    last_name = serializers.CharField(max_length = 150)
    email = serializers.CharField(max_length = 254)
    username = serializers.CharField(max_length = 150)
    password = serializers.CharField(max_length = 128)
    especialidad = serializers.CharField(max_length=25)
    telefono = serializers.CharField(max_length=15)
    dirección = serializers.CharField(max_length=40)
    vacaciones = serializers.BooleanField(default=False)
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email ya está registrado")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Este usuario ya existe")
        return value
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=make_password(validated_data['password'])  # Encripta la contraseña
        )
        doctor = self.create_doctor(user.id, validated_data)
        doctor_group = Group.objects.get(name='doctores')
        user.groups.add(doctor_group)
        
        return {
            'user_id': user.id,
            'doctor_id': doctor.id
        }
    
    def create_doctor(self, user_id, validated_data):
        doctor = Doctor.objects.create(
            usuario_id = user_id,
            especialidad = validated_data['especialidad'],
            telefono = validated_data['telefono'],
            dirección = validated_data['dirección'],
            vacaciones = validated_data['vacaciones']
        )

        return doctor
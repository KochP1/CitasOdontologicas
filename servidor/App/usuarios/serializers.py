from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
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

class UserSeralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'password',
            'username',
            'first_name',
            'last_name',
            'email'
        ]
    
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
        return user
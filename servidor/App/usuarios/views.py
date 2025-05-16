from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate

from .serializers import DoctorDataSerializer, UserInfoSerializer, UserSeralizer
from doctors.models import Doctor

# Create your views here.

class Login(APIView):
    allowed_methods = ['GET', 'POST']
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)

        if not user:
            return Response(
                {'error': 'Credenciales inválidas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # Determinar a qué grupos pertenece el usuario
        group_names = user.groups.values_list('name', flat=True)
        
        # Seleccionar el serializador adecuado según el grupo
        if 'doctores' in group_names:
            doctor_profile = Doctor.objects.get(usuario=user)
            serializer = DoctorDataSerializer(doctor_profile)
        else:
            serializer = UserInfoSerializer(user)
        
        user_data = {
                'message': 'Login successful',
                'csrf_token': get_token(request),
                'user': serializer.data
            }
        return Response(user_data, status=status.HTTP_200_OK)

class RegistrarUsuario(APIView):
    allowed_methods = ['POST']

    def post(self, request):
        serializer = UserSeralizer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'mensaje': 'Usuario creado'}, status=status.HTTP_201_CREATED)
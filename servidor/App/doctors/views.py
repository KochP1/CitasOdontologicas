from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .serializers import DoctorSerializer
from .models import Doctor

# Create your views here.

class DoctorView(APIView):
    allowed_methods = ['POST']

    def post(self, request):
        serializer = DoctorSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'mensaje': 'Doctor creado'}, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        doctores = Doctor.objects.all()
        serializer = DoctorSerializer(doctores, many=True)
        return Response(serializer.data)

class DoctorUpdate(APIView):
    allowed_methods = ['GET', 'DELETE', 'PUT']

    def get(self, request, pk):
        doctores = Doctor.objects.get(id = pk)
        serializer = DoctorSerializer(doctores, many=False)
        return Response(serializer.data)
    
    def delete(self, request, pk):
        doctor = Doctor.objects.get(id = pk)
        doctor.delete()
        return Response({'mensaje': 'Odontologo elimiando'}, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            doctor = Doctor.objects.get(id = pk)
        except Doctor.DoesNotExist:
            return Response({'Error': 'Docotor no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = DoctorSerializer(doctor, data = request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'mensaje': 'Doctor actualizado', 'idDoctor': f'{pk}'}, status=status.HTTP_200_OK)

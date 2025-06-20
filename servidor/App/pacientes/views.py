from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .serializers import PacienteSerializer
from .models import Paciente

# Create your views here.
class PacienteView(APIView):
    allowed_methods = ['POST', 'GET', 'HEAD', 'OPTIONS']

    def post(self, request):
        serializer = PacienteSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'mensaje': 'Paciente creado'}, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        pacientes = Paciente.objects.all()
        serializer = PacienteSerializer(pacientes, many=True)
        return Response(serializer.data)

class ModificarPaciente(APIView):
    allowed_methods = ['GET', 'DELETE', 'PUT']

    def get(self, request, pk):
        paciente = Paciente.objects.get(id = pk)
        serializer = PacienteSerializer(paciente, many=False)
        return Response(serializer.data)
    
    def delete(self, request, pk):
        paciente = Paciente.objects.get(id = pk)
        paciente.delete()
        return Response({'mensaje': 'Paciente eliminado', 'idPaciente': f'{pk}'}, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            paciente = Paciente.objects.get(id = pk)
        except Paciente.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = PacienteSerializer(paciente, data = request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'mensaje': 'Paciente actualizado'}, status=status.HTTP_201_CREATED)
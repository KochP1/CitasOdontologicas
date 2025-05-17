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
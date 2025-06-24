from django.forms import ValidationError
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .serializers import CitasSeializer, ObtenerCitasSerializer
from .models import Citas

# Create your views here.
class CitaView(APIView):
    allowed_methods = ['POST', 'GET', 'HEAD', 'OPTIONS']

    def post(self, request):
        serializer = CitasSeializer(data = request.data)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'mensaje': 'Cita agendada exitosamente'}, status=status.HTTP_201_CREATED)
        except ValidationError as e:
            # Devuelve los errores de validación en el formato que prefieras
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        citas = Citas.objects.all()
        serializer = ObtenerCitasSerializer(citas, many=True)
        return Response(serializer.data)

class DetailCita(APIView):
    allowed_methods = ['GET', 'DELETE', 'PUT']

    def get(self, request, pk):
        cita = Citas.objects.get(id = pk)
        serializer = ObtenerCitasSerializer(cita, many = False)
        return Response(serializer.data)
    
    def delete(self, request, pk):
        cita = Citas.objects.get(id = pk)
        cita.delete()
        return Response({'mensaje': 'Cita eliminada'}, status=status.HTTP_200_OK)

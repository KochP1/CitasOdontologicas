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
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'mensaje': 'Cita agendada exitosamente'}, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        citas = Citas.objects.all()
        serializer = ObtenerCitasSerializer(citas, many=True)
        return Response(serializer.data)
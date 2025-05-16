from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .serializers import DoctorSerializer

# Create your views here.

class DoctorView(APIView):
    allowed_methods = ['POST']

    def post(self, request):
        serializer = DoctorSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'mensaje': 'Doctor creado'}, status=status.HTTP_201_CREATED)


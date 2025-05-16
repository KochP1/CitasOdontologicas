from rest_framework import serializers

from .models import Citas


class CitasSeializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = '__all__'
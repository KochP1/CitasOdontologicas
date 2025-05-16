from django.urls import path
from .views import Login, RegistrarUsuario

urlpatterns = [
    path('login/', Login.as_view(), name='login'),
    path('regist_usuario/', RegistrarUsuario.as_view(), name='registrar_usuario')
]

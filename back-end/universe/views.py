from rest_framework import viewsets, permissions
from universe.serializers import PublisherSerializer, CharacterSerializer, UserSerializer
from universe.models import Publisher, Character
from django.contrib.auth.models import User

class PublisherViewSet(viewsets.ModelViewSet):
  queryset = Publisher.objects.all()
  serializer_class = PublisherSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CharacterViewSet(viewsets.ModelViewSet):
  queryset = Character.objects.all()
  serializer_class = CharacterSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  authentication_classes = []
  permission_classes =[permissions.AllowAny]
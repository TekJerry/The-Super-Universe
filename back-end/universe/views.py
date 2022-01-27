from rest_framework import viewsets, permissions
from universe.serializers import PublisherSerializer, CharacterSerializer
from universe.models import Publisher, Character

class PublisherViewSet(viewsets.ModelViewSet):
  queryset = Publisher.objects.all()
  serializer_class = PublisherSerializer
  # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CharacterViewSet(viewsets.ModelViewSet):
  queryset = Character.objects.all()
  serializer_class = CharacterSerializer
  # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


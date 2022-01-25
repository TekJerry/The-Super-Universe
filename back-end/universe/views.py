from rest_framework import viewsets
from universe.serializers import PublisherSerializer, CharacterSerializer
from universe.models import Publisher, Character

class PublisherViewSet(viewsets.ModelViewSet):
  queryset = Publisher.objects.all()
  serializer_class = PublisherSerializer

class CharacterViewSet(viewsets.ModelViewSet):
  queryset = Character.objects.all()
  serializer_class = CharacterSerializer
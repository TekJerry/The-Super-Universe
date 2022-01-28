from rest_framework import serializers
from universe.models import Publisher, Character

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
  characters = serializers.StringRelatedField(many=True, read_only=True)
  class Meta:
    model = Publisher
    fields = ['id','company', 'img_url', 'founded', 'founder', 'characters']

class CharacterSerializer(serializers.HyperlinkedModelSerializer):
  class Meta: 
    model = Character
    fields = ['id','code_name', 'weapon', 'fight_ability', 'real_name', 'dob', 'img_url', 'is_villain', 'is_hero', 'background', 'origin', 'publisher']

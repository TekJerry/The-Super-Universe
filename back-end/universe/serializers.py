from rest_framework import serializers
from universe.models import Publisher, Character
from django.contrib.auth.models import User

class PublisherSerializer(serializers.HyperlinkedModelSerializer):
  characters = serializers.StringRelatedField(many=True, read_only=True)
  class Meta:
    model = Publisher
    fields = ['id','company', 'img_url', 'founded', 'founder', 'characters']

class CharacterSerializer(serializers.HyperlinkedModelSerializer):
  publisher = serializers.StringRelatedField(many=False, read_only=True)
  class Meta: 
    model = Character
    fields = ['id','code_name', 'weapon', 'fight_ability', 'real_name', 'dob', 'img_url', 'is_villain', 'is_hero', 'background', 'origin', 'publisher']

class UserSerializer(serializers.ModelSerializer):
  def create(self, validated_data):
      return User.objects.create_superuser(**validated_data)
  
  class Meta:
      model = User
      fields = ['username', 'password', 'email']
from django.db import models

# Create your models here.

class Publisher(models.Model):
  company = models.CharField(max_length=256)
  img_url = models.CharField(max_length=256)
  founded = models.IntegerField()
  founder = models.CharField(max_length=256)
  
  def __str__(self):
    return self.company

class Character(models.Model):
  code_name = models.CharField(max_length=256)
  weapon = models.CharField(max_length=256)
  fight_ability = models.CharField(max_length=256)
  real_name = models.CharField(max_length=256)
  dob = models.DateField()
  img_url = models.CharField(max_length=256)
  is_villain = models.BooleanField()
  is_hero = models.BooleanField()
  background = models.CharField(max_length=256)
  origin = models.CharField(max_length=256)
  publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, related_name='publisher')

  def __str__(self):
    return self.code_name
from django.contrib import admin

# Register your models here.

from .models import Publisher, Character

admin.site.register([Publisher, Character])
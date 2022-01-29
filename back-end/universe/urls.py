from rest_framework import routers
from .views import CharacterViewSet, PublisherViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('characters', CharacterViewSet, 'characters')
router.register('publishers', PublisherViewSet)
router.register('users', UserViewSet, 'users')

urlpatterns = router.urls

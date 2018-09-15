from django.conf.urls import url
from .views import IndexView

urlpatterns = [
    url(r'^user/',view = IndexView.as_view())

]

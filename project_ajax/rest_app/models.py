from django.db import models
from django.contrib.auth.models import User
from django.conf import settings



class UserProfile(User):
    model = User
    fields = ['first_name',
               'last_name',
               'email',
               'username'
               'password',]



class Vechical(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    vechical_no = models.CharField(max_length=14)
    vechical_model = models.CharField(max_length=20)
    vechical_model_year = models.DateField(auto_now=False)
    def __str__(self):
        return self.vechical_no



class VechicalProblume(models.Model):
    vechical = models.ForeignKey(Vechical,on_delete= models.CASCADE)

    v_problum = models.CharField(max_length=20,choices =(('S','starting_problum'),('F','fuel_empty'),('MN','engine_minor'),('MJ','engine_major')))

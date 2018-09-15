from django import forms

from .models  import *


class UserForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['first_name','last_name','email','username','password',]

class VechicalForm(forms.ModelForm):
    class Meta:
        model = Vechical
        fields = ['user','vechical_no','vechical_model','vechical_model_year']
class VechicalProForm(forms.ModelForm):
    class Meta:
        model = VechicalProblume
        fields = ['vechical','v_problum']

from django.shortcuts import render,redirect
from . forms import *
from django.views.generic import View
from django.http import HttpResponse


class  IndexView(View):
    template_class = "index.html"


    def get(self,request):
        form1 = UserForm()
        form2 = VechicalForm()
        form3 = VechicalProForm()
        return render(request,'index.html',{'form1':form1,'form2':form2,'form3':form3})
    def post(self,request):
        op_type =request.POST['op_type']
        if request.is_ajax():
            print("ajax")
        if op_type == "user":
            form = UserForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('index.html')


        elif op_type == request.POST["vechical"]:
            if request.is_ajax():
                print("ajax")
            form = VechicalForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('index.html')


        elif op_type ==request.POST["v_prob"]:
            if request.is_ajax():
                print("ajax")
            form = VechicalProForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('index.html')
        else:
            return HttpResponse("something went wrong")

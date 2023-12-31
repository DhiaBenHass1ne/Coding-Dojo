from django.shortcuts import render, redirect
from time import gmtime, strftime
from django.http import HttpResponse

# Create your views here.
def root(request):
    return redirect("/time_display")

def index(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request,'index.html', context)
from rest_framework import response, status
# Create your views here.
from dbconnection import db
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

@api_view(['POST'])
@csrf_exempt
def hello(request) :
    return response.Response("hello word", status=status.HTTP_200_OK)
@api_view(['POST'])
@csrf_exempt
def addToDb(request):
   
    print("Endpoint setted")
    return response.Response({"res" : "Panier mis a jour"}, status=status.HTTP_201_CREATED)
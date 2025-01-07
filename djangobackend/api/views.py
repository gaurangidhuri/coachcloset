from urllib import response
from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView
from .models import User

# Create your views here.
class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Django view
class SampleAPI(ListAPIView):
    def get(self, request):
        data = {"message": "Hello from Django!"}
        return response(data)

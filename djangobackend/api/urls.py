from django.urls import path
from api import views

urlpatterns = [
    path('User/', views.UserList.as_view()),
]

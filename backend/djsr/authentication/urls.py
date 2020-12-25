from django.urls import path
from rest_framework_simplejwt import views
from .views import TokenObtainPairWithColor,CustomUserCreate,HelloWorldView,LogoutAndBacklistRefreshTokenForUserView

urlpatterns=[
    path('user/create/',CustomUserCreate.as_view(),name='create_user'),
    path('token/obtain/',TokenObtainPairWithColor.as_view(),name='token_create'),
    path('token/refresh/',views.TokenRefreshView.as_view(),name='token_refresh'),
    path('backlist/',LogoutAndBacklistRefreshTokenForUserView.as_view(),name='blacklist'),
    path('hello/',HelloWorldView.as_view(),name="hello_world")
]
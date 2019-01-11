from django.db import models

# Create your models here.


class Messages(models.Model):
    """ Model Messages """
    user = models.ForeignKey('auth.user', on_delete=models.CASCADE)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


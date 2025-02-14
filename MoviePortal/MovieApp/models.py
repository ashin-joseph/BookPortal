from django.db import models

class movieDB(models.Model):
    title=models.CharField(max_length=100)
    director=models.CharField(max_length=100)
    year=models.CharField(max_length=100)
    language=models.CharField(max_length=100)
    poster = models.ImageField(upload_to='posters', null=True, blank=True)
    def __str__(self):
        return self.title
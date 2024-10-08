from django.db import models
from django.urls import reverse
from all_in_one.settings import AUTH_USER_MODEL
from django.utils import timezone

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=128, verbose_name ='Nom')
    slug = models.SlugField(max_length=128)
    price = models.FloatField(default=0.0, verbose_name = 'Prix')
    stock = models.IntegerField(default=0, verbose_name='quantitée')
    description = models.TextField(blank = True, verbose_name = 'Description')
    thumbnail = models.ImageField(upload_to = "products", blank = True, null = True)
   
    def __str__(self):
        return self.name
    

    def get_absolute_url(self):
        return reverse("product", kwargs={"slug":self.slug})
        

    class Meta:
        verbose_name = 'Produit'
        verbose_name_plural = 'Produits'

class Order(models.Model):
    user = models.ForeignKey(AUTH_USER_MODEL,on_delete = models.CASCADE)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    quantity = models.IntegerField(default = 1)
    ordered = models.BooleanField(default = False)
    ordered_date = models.DateTimeField(blank = True, null = True)


    def __str__(self):
        return f"{self.product.name} ({self.quantity})"
    


class Cart(models.Model):
    user = models.OneToOneField(AUTH_USER_MODEL, on_delete = models.CASCADE)
    orders = models.ManyToManyField(Order) 

    def __str__(self):
        return self.user.username

    def delete(self, *args, **kwargs):
        for order in self.orders.all():
            order.ordered = True
            order.ordered_date = timezone.now()
            order.save()
            
        self.orders.clear()
        super().delete(*args, **kwargs)
        
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


phones = [
  {
    'name' :   'Samsung Fold model',
    'price' :   170000,
    'discount' :   0.15,
  },
  {
    'name' : 'Moto G85',
    'price' :   80000,
    'discount':  0.1,
  },
  {
    'name' : 'Moto G85',
    'price' :  80000 ,
    'discount' : 0.1,
    },
    {
      'name' :  'Samsung Galaxy S23 Ultra',
      'price' :  600000 ,
      'discount' :  0.15,

    },
  {
    'name': 'OPPO Reno',
    'price' : 75000,
    'discount' : 0.12,
  },

  {
    'name' : 'Samsung second Fold Model',
    'price' : 550000,
    'discount' : 0.5,
  },
  {
    'name' : 'Samsung Galaxy S23 Ultra Pro',
    'price' : 550000 ,
    'discount' : 0.0 ,
  },
  {
    'name' : 'Moto G85 pro',
    'price' : 75000 ,
    'discount' : 0.15,
  },
  {
    'name' : 'Oppo Reno Pro',
    'price' : 60000 ,
    'discount' : 0.20 ,
  }





];





}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { generalServices } from '../services/generalServices.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditComponent {
  product: Product = {
    Id: null,
    Name: '',
    ProductionCost: 0,
    SaleCost: 0,
    Quantity: 0
  };
  Id: number;
  constructor(private service: generalServices,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(p => {
      this.Id = +p['id'];
    })
  }

  ngOnInit() {
    this.service.getProduct(this.Id).subscribe(x => {
      this.Id = x.id;
      this.product.Id = x.id;
      this.product.Name = x.name;
      this.product.ProductionCost = x.productionCost;
      this.product.SaleCost = x.saleCost;
      this.product.Quantity = x.quantity;
      console.log("product", this.product);
    });
  }

  submit() {
    if (this.Id) {
      this.service.update(this.product)
        .subscribe(v => {
          console.log("Success");
          this.router.navigate(['/']);
        });
    } else {
      console.log(this.product);
      this.service.create(this.product)
        .subscribe(x => {
          console.log(x);
          this.product.Id = x.Id;
          this.router.navigate(['/']);
        });
    }
  }
}

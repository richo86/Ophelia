import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { generalServices } from '../services/generalServices.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  product: Product;
  products: any;

  constructor(private service: generalServices,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe(x => {
      this.products = x;
    });
  }

  editProduct() {
    console.log("editar");
  }

  delete(id) {
    if (confirm("¿Estas seguro de querer eliminar esto?")) {
      this.service.delete(id)
        .subscribe(x => {
          this.router.navigate(['/']);
        })
    }
  }
}

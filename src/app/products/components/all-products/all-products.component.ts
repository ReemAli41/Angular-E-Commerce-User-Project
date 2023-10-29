import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products : Product[] = [] ;
  categories : string[] = [];
  loading : boolean = false;
  cartProduct : any[] = [];
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts(){
      this.loading = true;
      this.service.getAllProducts().subscribe((res:any) => {
      this.products=res;
      //console.log(res);
      this.loading = false;
    }, error => {
      this.loading = false;
      alert(error)
    }   )
  }
  
  getCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) => {
    console.log(res)
    this.categories=res;
    //console.log(res);
    this.loading = false;
  }, error => {
    this.loading = false;
    alert(error)
  }   )
}

filterCategory(event:any){
  let value = event.target.value; //detect change
  //console.log(value)
  if(value == "all"){
    this.getProducts()
  }else{
    this.getProductsCategory(value);
  }
}
getProductsCategory(keyword:string){
  this.loading = true;
  this.service.getProductsByCategory(keyword).subscribe((res:any) => {
    this.products = res;
    this.loading = false;

  })
}

addToCart(event:any){
  //console.log(event); 
  if("cart" in localStorage){
    this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProduct.find(item => item.item.id == event.item.id);
    if(exist){
      alert("Product is already in your cart")
    }else{
      this.cartProduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    }
    
  }else{
    this.cartProduct.push(event);
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
  }
}

}



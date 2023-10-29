import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;
  constructor(){}
  ngOnInit(): void {
  }
  add(){
    this.item.emit({item:this.data, quantity:this.amount})
  }
  
  

}

import { Component, OnInit } from '@angular/core';
import data from './data'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products = data

  constructor() { }

  ngOnInit(): void {
  }

}

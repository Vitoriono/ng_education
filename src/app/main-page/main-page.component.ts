import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgModel} from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../shared/product.service';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductComponent)
  viewChild: ProductComponent

  products$

  constructor(
    private productServ: ProductService

  ) { }

  ngAfterViewInit(): void {
      this.viewChild
  }

  ngOnInit() {
    this.products$ = this.productServ.getAll()
  }

}

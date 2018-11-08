import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListSevice } from '../../services/shopping-list';


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor (private shoppingListService: ShoppingListSevice) {}

  onAddItem(form: NgForm) {
    console.log(form);
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    console.log('Ecco la shopping list ' + JSON.stringify(this.shoppingListService.getItems()));

  }
}

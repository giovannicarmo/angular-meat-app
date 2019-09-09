import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Crédito', value: 'CCR'},
    {label: 'Cartão de Débito', value: 'DCR'},
    {label: 'Ticket Refeição', value: 'REF'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

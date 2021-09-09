import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  service:PaymentDetailService;
  constructor(_service:PaymentDetailService) {
    this.service = _service;
  }

  ngOnInit(): void {
  }

  onSubmit(form:any):void{
    console.log(this.service.formData);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from 'src/app/Models/paymentDetail.model';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  service:PaymentDetailService;
  constructor(_service:PaymentDetailService,private toastr: ToastrService) {
    this.service = _service;
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    if(this.service.formData.paymentDetailId == 0)
      this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  updateRecord(form:NgForm){
    this.service.putPaymentDetail().subscribe((data)=>{
    this.toastr.info('Updated Sussesssfully','Payment Detail Updating')
    this.service.refreshList();
    this.resetForm(form);
    },
    err=>{
      console.log(err);
    });
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe((data)=>{
    this.toastr.success('Submitted Sussesssfully','Payment Detail Register')
    this.service.refreshList();
    this.resetForm(form);
    },
    err=>{
      console.log(err);
    });
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetails();
  }
}

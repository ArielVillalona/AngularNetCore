import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../Models/paymentDetail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {
  trashIcon=faTrashAlt

  constructor(public service:PaymentDetailService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetails){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDeleted(id:number){
    if(confirm("Are you sure to delete this record?"))
    {
      this.service.deletePaymentDetail(id)
        .subscribe(
          res=>{
            this.service.refreshList();
            this.toastr.error("Deleted successfully","Payment Detail Register");
          },
          err=>{console.log(err)}
        );
    }
  }
}

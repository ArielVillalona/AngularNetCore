import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { PaymentDetails } from '../Models/paymentDetail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService extends RestApiService{

  readonly baseUrl = '/api/PaymentDetails';
  formData:PaymentDetails = new PaymentDetails();
  list:PaymentDetails[] = new Array();

  postPaymentDetail(){
    return this.post<PaymentDetails>(this.baseUrl,this.formData);
  }

  putPaymentDetail(){
    return this.put<PaymentDetails>(this.baseUrl,this.formData.paymentDetailId,this.formData);
  }

  deletePaymentDetail(id:number){
    return this.delete(this.baseUrl,id);
  }

  refreshList(){
    this.get<PaymentDetails[]>('/api/PaymentDetails')
      .toPromise()
      .then(res=>{
        this.list = res;
      })
  }
}

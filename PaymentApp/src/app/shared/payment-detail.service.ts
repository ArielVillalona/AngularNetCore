import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44385/api/PaymentDetails';
  formData:PaymentDetail = new PaymentDetail();
  list:PaymentDetail[] = new Array();

  postPaymentDetail(){
    return this.http.post(this.baseUrl,this.formData)
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`,this.formData)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res=>{
      this.list= res as PaymentDetail[];
    })
  }

}

import { Component } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaymentApp';
  shopping = faShoppingBag;
}

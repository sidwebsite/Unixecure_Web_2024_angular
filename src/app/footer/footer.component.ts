import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  introduction= {
    address: '114 臺北市內湖區基湖路 35 巷 13 號 8 樓',
    email: 'servicedesk@unixecure.com.tw'
  }
  year = new Date().getFullYear();
}

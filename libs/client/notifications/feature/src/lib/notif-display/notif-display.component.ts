import { Component, OnInit } from '@angular/core';


import { HeaderModule } from 'libs/client/shared/components/header/src/lib/header.module';
import { FooterModule } from 'libs/client/shared/components/footer/src/lib/footer.module';

@Component({
  selector: 'graduates-notif-display',
  templateUrl: './notif-display.component.html',
  styleUrls: ['./notif-display.component.scss'],
})
export class NotifDisplayComponent{

  constructor() {
/*     fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          notificationsAll {
            ID
          }
        }`
      }),
    })
    .then(res =>  res.json())
    .then(res => console.log(res.data)); */
  }
}

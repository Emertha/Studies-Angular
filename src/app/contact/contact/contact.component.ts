import { Component, OnInit } from '@angular/core';
import { OneContact, Details } from 'src/app/contact/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public firstcontact: OneContact = new OneContact(
    'Adam',
    'Kowalski',
    12345,
    new Details('600500400', 'mail@gmail.com')
  );

  public secondcontact: OneContact = new OneContact(
    'Jerzy',
    'Nowak',
    12121,
    new Details('640400460', 'mail2@gmail.com')
  );

  public thirdcontact: OneContact = new OneContact(
    'Nono',
    'Las',
    55667,
    new Details('604444323', 'mail3@gmail.com')
  );


  constructor() { }

  ngOnInit() {
  }

}

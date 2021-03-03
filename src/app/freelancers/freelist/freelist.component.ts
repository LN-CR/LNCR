import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelist',
  templateUrl: './freelist.component.html',
  styleUrls: ['./freelist.component.scss'],
})
export class FreelistComponent implements OnInit {
  contactList = [
    { name: 'John', title: 'Farmer' },
    { name: 'Carter', title: 'President' },
    { name: 'Chad', title: 'Fratboy' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

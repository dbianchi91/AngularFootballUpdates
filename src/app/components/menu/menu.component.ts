import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  countries: { name: string; id: number }[] = [
    { name: 'England', id: 39 },
    { name: 'Spain', id: 140 },
    { name: 'France', id: 61 },
    { name: 'Germany', id: 78 },
    { name: 'Italy', id: 135 },
  ];
  constructor() {}
  ngOnInit(): void {}
}

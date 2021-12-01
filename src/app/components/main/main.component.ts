import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/models/Title';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public value = 'Clear me';

  tiles: Tile[] = [
    {text: 'cource', cols: 1, rows: 2, color: 'lightblue', margin_top: ''},
    {text: 'cource', cols: 2, rows: 2, color: 'lightgreen', margin_top: ''},
    {text: 'cource', cols: 1, rows: 1, color: 'lightpink', margin_top: ''},
    {text: 'cource', cols: 1, rows: 2, color: '#DDBDF1', margin_top: ''},
    {text: 'cource', cols: 1, rows: 2, color: '#DDBDF1', margin_top: ''},
    {text: 'cource', cols: 1, rows: 2, color: 'lightpink', margin_top: ''},
    {text: 'cource', cols: 1, rows: 2, color: 'lightblue', margin_top: ''},
    {text: 'cource', cols: 1, rows: 1, color: 'lightgreen', margin_top: ''},
    {text: '', cols: 4, rows: 1, color: 'white', margin_top: '10'},

    {text: 'Eight', cols: 1, rows: 1, color: 'lightgreen', margin_top: ''},
    {text: 'Eight', cols: 2, rows: 1, color: 'lightgreen', margin_top: ''},
      {text: 'Seven', cols: 1, rows: 1, color: 'lightblue', margin_top: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

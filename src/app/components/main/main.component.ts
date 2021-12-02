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
    {cols: 1, rows: 2, color: 'lightblue', cource: {
      text: 'cource',
      price: '100', 
      auhtor: 'Peter',
      margin_top: '120px',
    }},
    {cols: 2, rows: 2, color: 'lightgreen', cource: {
      text: 'cource',
      price: '200', 
      auhtor: 'Ivan',
      margin_top: '500px',
    }},
    {cols: 1, rows: 1, color: 'lightpink', cource: {
      text: 'cource',
      price: '100', 
      auhtor: 'Kot' ,
      margin_top: '120px',
    }},
    {cols: 1, rows: 2, color: '#DDBDF1',cource: {
      text: 'cource',
      price: '100', 
      auhtor: 'Cat' ,
      margin_top: '120px',
    }},
    {cols: 1, rows: 2, color: '#DDBDF1', cource: {
      text: 'cource',
      price: '100', 
      auhtor: 'Dog' ,
      margin_top: '120px',
    }},
    {cols: 1, rows: 2, color: 'lightpink',cource: {
      text: 'cource',
      price: '10000', 
      auhtor: 'Red' ,
      margin_top: '120px',
    }},
    {cols: 1, rows: 2, color: 'lightblue', cource: {
      text: 'cource',
      price: '10000', 
      auhtor: 'Purpule' ,
      margin_top: '120px',
    }},
    {cols: 1, rows: 1, color: 'lightgreen',cource: {
      text: 'cource',
      price: '2324', 
      auhtor: 'Sans' ,
      margin_top: '120px',
    }},
    {cols: 4, rows: 1, color: 'white',cource: {
      text: 'cource',
      price: '2343', 
      auhtor: 'Narcis' ,
      margin_top: '120px',
    }},

    { cols: 1, rows: 1, color: 'lightgreen',cource: {
      text: 'Eight',
      price: '123', 
      auhtor: 'NHoursearcis' ,
      margin_top: '120px',
    }},
    {cols: 2, rows: 1, color: 'lightgreen', cource: {
      text: 'Eight',
      price: '345', 
      auhtor: 'Bird' ,
      margin_top: '500px',
    }},
    {cols: 1, rows: 1, color: 'lightblue',cource: {
      text: 'Eight',
      price: '678', 
      auhtor: 'Mussnucle' ,
      margin_top: '120px',
    }},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

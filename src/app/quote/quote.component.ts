import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('The greatest glory in living lies not in never falling, but in rising everytime we fall', 'Nelson Mandela', 'Founder'),
    new Quote('The way to get started is to quit talking and begin doing', 'Walt Disney','Founder'),
    new Quote('Life is what happens when you are busy making other plans', 'John Lennon', 'Founder'),
    new Quote('Love the life you live. Live the life you love', 'Bob Marley', 'Founder'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

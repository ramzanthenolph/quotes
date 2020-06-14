import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'The greatest glory in living lies not in never falling, but in rising everytime we fall', 'Nelson Mandela', 'Founder',0,0),
    new Quote(2,'The way to get started is to quit talking and begin doing', 'Walt Disney','Founder',0,0),
    new Quote(3,'Life is what happens when you are busy making other plans', 'John Lennon', 'Founder',0,0),
    new Quote(4,'Love the life you live. Live the life you love', 'Bob Marley', 'Founder',0,0),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    //quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

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
  addNewQuote(quote){
    //let quoteLength = this.quotes.length;
    //goal.id = goalLength+1;
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

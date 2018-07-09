import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  template: `
  <app-joke *ngFor="let j of jokes" [joke]="j"></app-joke>
  `
})
export class JokeListComponent implements OnInit {
  jokes: Joke[]
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  ngOnInit() {
  }

}
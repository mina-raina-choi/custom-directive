import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  template: `
  <div class="card card-block" ccCardHover>
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
    [style.display]="'none'">{{data.punchline}}</p>
  </div>
  `
  })

export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;

  constructor() { }

  ngOnInit() {
  }

}

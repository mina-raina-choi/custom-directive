import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  template: `
  <div class="card card-block" ccCardHover>
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
     [hidden]="data.hide">{{data.punchline}}</p>
    <button (click)="data.toggle()"
       class="btn btn-primary">Tell Me
    </button>
  </div>
  `
  })

export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;

  constructor() { }

  ngOnInit() {
  }

}

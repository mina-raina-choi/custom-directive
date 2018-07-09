import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  //  [ccCardHover]="{querySelector:'p'}" 처럼 상황에 맞게 querySelector를 바꿔주면 ccCardHover 디렉티브를 재사용할 수 있다.
  template: `
  <div class="card card-block" [ccCardHover]="{querySelector:'.card-text'}">
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

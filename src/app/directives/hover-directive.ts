import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[ccCardHover]'
    // selector를 []으로 감쌀 경우 element의 attribute로 사용된다. 
    // <div class="card card-block" ccCardHover>...</div>
})
export class CardHoverDirective {
    // html에서 ngClass를 이용해 [class.card-outline-primary]="ishovering" 으로 사용할 수도 있다.
    @HostBinding('class.card-outline-primary') private ishovering: boolean;

    // ccCardHover디렉티브에 querySelector라는 프로퍼티를 만들어 상황에 맞게 querySeletor를 수정할 수 있게끔.
    @Input('ccCardHover') config: any = {
        querySelector : '.card-text'
    };

    // 디렉티브가 생성될 때, 앵귤러는 ElementRef를 주입할 수 있다. 
    constructor(private el: ElementRef, private renderer: Renderer) {
        // DOM element를 통해 직접적으로 배경색을 세팅하는 것 대신 renderer를 통해 세팅!
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }

    @HostListener('mouseover') onmouseover() {
        // let part = this.el.nativeElement.querySelector('.card-text')
        let part = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(part, 'display', 'block')
        this.ishovering = true;
    }

    @HostListener('mouseout') onmouseout() {
        // let part = this.el.nativeElement.querySelector('.card-text')
        let part = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(part, 'display', 'none')
        this.ishovering = false;
    }
}
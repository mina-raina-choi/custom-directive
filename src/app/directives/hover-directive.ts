import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[ccCardHover]'
    // selector를 []으로 감쌀 경우 element의 attribute로 사용된다. 
    // <div class="card card-block" ccCardHover>...</div>
})
export class CardHoverDirective {

    // 디렉티브가 생성될 때, 앵귤러는 ElementRef를 주입할 수 있다. 
    constructor(private el: ElementRef, private renderer: Renderer) {
        // DOM element를 통해 직접적으로 배경색을 세팅하는 것 대신 renderer를 통해 세팅!
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }
}
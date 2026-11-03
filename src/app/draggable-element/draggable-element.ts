import { Component } from '@angular/core';

@Component({
  selector: 'app-draggable-element',
  standalone: false,
  templateUrl: './draggable-element.html',
  styleUrl: './draggable-element.css',
})
export class DraggableElement {
  // TODO (Part 4):
  //   mouseDown - boolean
  //   a @ViewChild reference to the #draggable div (needs ElementRef) and Renderer2 in the constructor
  //   onMouseButton(event) - mouseDown is true only while the left button (buttons === 1) is held
  //   onContentDrag(event) - while mouseDown, move the box to follow the pointer
}

import { outputAst } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
@Output() close = new EventEmitter

  constructor(private el:ElementRef){}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy()  {
    this.el.nativeElement.remove()
  }

  onCloseClick() {
    this.close.emit();
  }

}

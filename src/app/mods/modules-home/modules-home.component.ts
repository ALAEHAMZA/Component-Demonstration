import { Component } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent {
  modalOpen = false;


  items = [
    {title: "Why is the sky blue?", content: "The sky is blue because is it"},
    {title: "What does an orange taste like?", content: "The sky is blue because is it"},
    {title: "Why is the sky blue?", content: "An- orange taste like orange"}

  ]

  onClick() {
    this.modalOpen = !this.modalOpen
  }

}

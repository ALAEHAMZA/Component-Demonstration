import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {
  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Alae', age: 20, job: 'Developer'},
    {name: 'Elyse', age: 26, job: 'Engineer'},
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
}

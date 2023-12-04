import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'max_project1';
  selectedFeature: string = '';
  onSelectFeature(feature: string) {
    this.selectedFeature = feature;
  }
}

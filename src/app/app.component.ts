import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // courseGoals = [
  //     { title: 'Master Angular Styling', isActiveGoal: true },
  //     { title: 'Understand Angular Animations', isActiveGoal: false },
  //     { title: 'Master Angular Animations', isActiveGoal: false }
  // ];
  isFavorite = false;

  constructor(private renderer: Renderer2) {}

  onShowBoring(element: HTMLElement) {
    // element.style.display = 'block'; // Don't use this method
    this.renderer.setStyle(element, 'display', 'block');
  }
}

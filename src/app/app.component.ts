import { Component, Renderer2 } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

  // courseGoals = [
  //     { title: 'Master Angular Styling', isActiveGoal: true },
  //     { title: 'Understand Angular Animations', isActiveGoal: false },
  //     { title: 'Master Angular Animations', isActiveGoal: false }
  // ];
  // divClicked = false;
  // doAnimate = false;
  //
  // isFavorite = false;
  //
  // constructor(private renderer: Renderer2) {}
  //
  // onShowBoring(element: HTMLElement) {
  //   // element.style.display = 'block'; // Don't use this method
  //   this.renderer.setStyle(element, 'display', 'block');
  // }
}

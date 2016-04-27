import {Component} from 'angular2/core';
import {GoalsBoxComponent} from './goals-box.component';
import {GoalListComponent} from './goal-list.component';
import {Goal} from './goal';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Goals Today</h1>
      <div *ngIf="goals.length == 0">
      	<p>Start by writing your goals for today in the box below.</p>
        <goals-box (goalsChanged)=onGoalsChanged($event)></goals-box>
      </div>
      <div *ngIf="goals.length > 0">
        <p>Check off your goals as the day progresses.</p>
        <goal-list [goals]="goals"></goal-list>
        <div *ngIf="allGoalsComplete()">
          <p>Well done!</p>
        </div>
      </div>
    `,
    directives: [GoalsBoxComponent, GoalListComponent]
})
export class AppComponent {

  //  The goals, built from the raw text.
  goals: Goal[] = [];

  onGoalsChanged(goals: Goal[]) {
    this.goals = goals;

    console.log("Goals list event! " + JSON.stringify(goals));
  }

  allGoalsComplete() {
    if (this.goals.length === 0) return false;

    return this.goals.every((goal) => { return goal.done; });
  }
}

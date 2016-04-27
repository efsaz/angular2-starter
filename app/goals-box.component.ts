import {Component, Output, EventEmitter} from 'angular2/core';
import {Goal} from './goal';

@Component({
	selector: 'goals-box',
	template: `
		<form>
		  <textarea 
        [(ngModel)]="rawgoals"
        class="u-full-width" 
        placeholder="Go to the gym" 
        autofocus="true"
        id="goals"
        rows="12"></textarea>
		  <input class="button-primary" type="button" (click)="fireGoalsChanged($event)" value="Done!">
		</form>
	`
})
export class GoalsBoxComponent {
	// 	The raw list of goals in the text box.
	rawgoals: string = "";
  goals: Goal[];

	// 	Event we fire when the goals change.
	@Output() goalsChanged: EventEmitter<Goal[]> = new EventEmitter();

	//	Call to fire the goals changed, using new raw goals.
	fireGoalsChanged(evt) {
		let allGoals = this.rawgoals.split('\n');
    let goals = allGoals.map((goal) => {
      return new Goal(goal);
    });
    this.goalsChanged.next(goals);
    this.goals = goals;
	}
}
import {Component, Input} from 'angular2/core';
import {Goal} from './goal';

@Component({
  selector: 'goal-list',
  template: `
    <div *ngFor="#goal of goals" class="panel">
      <label>
        <input style="margin-bottom:0px;" type="checkbox" [(ngModel)]="goal.done">
        <span class="label-body">{{goal.title}}</span>
      </label>
    </div>
  `})
export class GoalListComponent {
  @Input() goals: Goal[] = [];
}
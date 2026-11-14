import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [DatePipe, UpperCasePipe],
  selector: 'app-task-flow',
  styleUrl: './task-flow.css',
  templateUrl: './task-flow.html',
})
export class TaskFlow {
  counter = 3;
  tasks = [
    { id: 0, title: 't1', dueDate: '2026-11-15' },
    { id: 1, title: 't2', dueDate: '2026-11-15' },
  ];
  title = 'TaskFlow';
  canDelete = false;
  rename() {
    this.title = 'Mes taches';
    this.canDelete = true;
  }
  add() {
    const task = { id: this.counter, title: `t${this.counter}`, dueDate: '2026-11-15' };
    this.tasks.push(task);
    this.counter++;
  }
  delete() {
    this.title = 'Deleted';
    this.canDelete = false;
    this.tasks.shift();
    this.counter--;
  }
}

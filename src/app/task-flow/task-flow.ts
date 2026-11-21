import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

@Component({
  imports: [DatePipe, UpperCasePipe],
  selector: 'app-task-flow',
  styleUrl: './task-flow.css',
  templateUrl: './task-flow.html',
})
export class TaskFlow {
  counter = 1;
  tasks = signal<Task[]>([]);
  count = computed(() => this.tasks().length);
  title = 'TaskFlow';
  canDelete = computed(() => this.count() > 0);
  rename() {
    this.title = 'Mes taches';
  }
  add() {
    const t: Task = {
      id: this.counter,
      title: `t${this.counter}`,
      completed: false,
      priority: 'low',
      dueDate: '2026-11-15',
    };
    this.tasks.update((list) => [...list, t]);
    this.counter++;
  }
  delete() {
    this.tasks.update((list) => list.slice(1));
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TaskFlow } from './task-flow/task-flow';

@Component({
  imports: [RouterOutlet, Home, About, TaskFlow],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-classwork');
}

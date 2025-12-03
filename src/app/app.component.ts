import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Analisis Videojuegos';
}

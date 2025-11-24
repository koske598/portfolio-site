import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { About } from "./pages/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-site';
}

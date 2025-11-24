import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-site';
}

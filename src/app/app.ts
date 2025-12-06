import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-site';
}

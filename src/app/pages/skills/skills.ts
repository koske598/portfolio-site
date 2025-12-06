import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

export type Skill = {
  skillNo: number,
  skillImage: string,
  imageAlt: string,
  skillText: string
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skills: Skill[] = [
    {
      skillNo: 1,
      skillImage: 'assets/TypeScript.svg',
      imageAlt: 'TypeScript',
      skillText: 'TypeScript'
    },
    {
      skillNo: 2,
      skillImage: 'assets/Angular.svg',
      imageAlt: 'Angular',
      skillText: 'Angular'
    },
    {
      skillNo: 3,
      skillImage: 'assets/Java.png',
      imageAlt: 'Java',
      skillText: 'Java'
    },
    {
      skillNo: 4,
      skillImage: 'assets/Spring.svg',
      imageAlt: 'Spring Boot',
      skillText: 'Spring Boot'
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cities } from '../../data/cities';
import { programs } from '../../data/programs';
import { categories } from '../../data/categories';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  city: string = '';
  program: string = '';
  category: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const city = paramMap.get('city');
      const category = paramMap.get('category');
      const program = paramMap.get('program');

      if (!city || !cities.includes(city)) {
        this.router.navigate(['error']);

        return;
      }

      this.city = city;

      if (!program) return;

      if (program && !programs.includes(program)) {
        this.router.navigate(['error']);

        return;
      }

      this.program = program;

      if (!category) return;

      if (category && !categories.includes(category)) {
        this.router.navigate(['error']);

        return;
      }

      this.category = category;
    });
  }
}

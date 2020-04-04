import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

}

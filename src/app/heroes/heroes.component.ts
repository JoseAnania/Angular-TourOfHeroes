/* HeroesComponent solo presentará la lista de héroes. HeroDetailComponent presentará los detalles de un héroe seleccionado. */

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // definimos las propiedades
  heroes: Hero[] = [];

  // inyectamos el servicio
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    // llamamos al método que obtiene los Héroes
    this.getHeroes();
  }

  // método para recuperar los héroes del servicio.
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // método para agregar un nuevo Héroe
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // método para borrar un Héroe
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

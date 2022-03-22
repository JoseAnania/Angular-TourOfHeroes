/* HeroesComponent solo presentará la lista de héroes. HeroDetailComponent presentará los detalles de un héroe seleccionado. */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',

})
export class HeroDetailComponent implements OnInit {

  // creamos la propiedad del héroe
  hero: Hero | undefined;

  // inyectamos el servicio, el enrutador y el localizador
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {

    // llamamos al método
    this.getHero();
  }

  // método para obtener la info de un Héroe
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // método para volver atrás (usamos el localizador)
  goBack(): void {
    this.location.back();
  }

  // método para salvar la modificación de un Héroe
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

/* Componente para manejar la información del buscador */
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  // creamos las propiedades
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  // inyectamos el servicio
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    // personalizamos la búsqueda
    this.heroes$ = this.searchTerms.pipe(

      // espera 300 ms después de introducir un caracter para realizar la búsqueda
      debounceTime(300),

      // ignorar el nuevo término si es el mismo que el anterior
      distinctUntilChanged(),

      // cambiar a una nueva búsqueda cada vez que cambia el término
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // método para buscar
  search(term: string): void {
    this.searchTerms.next(term);
  }
}

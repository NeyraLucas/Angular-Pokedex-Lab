import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-list-for-type',
  templateUrl: './list-for-type.component.html',
  styleUrls: ['./list-for-type.component.scss'],
})
export class ListForTypeComponent implements OnInit {
  public nameParams$: Observable<string> = of('');
  constructor(private _activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getParamsByPokemonType();
  }

  public getParamsByPokemonType() {
    this.nameParams$ = this._activeRoute.params.pipe(
      map((params) => params['id'])
    );

  }
}

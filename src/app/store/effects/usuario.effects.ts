import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions,
              private usuarioService: UsuarioService) { }

  cargarUsuarios$ = createEffect(

    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap(
        (action) => this.usuarioService.getUserById(action.id)
          .pipe(
            map(usuario => usuariosActions.cargarUsuarioSuccess({ usuario })),
            catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err })))
          )
      )
    )
  );

}

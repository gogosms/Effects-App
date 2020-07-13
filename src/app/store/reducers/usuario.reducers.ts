import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';


export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}


const usuariosInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};


export const _usuarioReducers =
  createReducer(usuariosInitialState,

    on(cargarUsuario, (state, {id}) => ({
      ...state,
      loading: true,
      id

    })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...usuario}
    })),

    on(cargarUsuarioError, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    }))



  );


export function usuarioReducer(state, action) {
  return _usuarioReducers(state, action);
}

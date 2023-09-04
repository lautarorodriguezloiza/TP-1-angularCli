import { AuthState } from './auth.state';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions'; 

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, isAuthenticated: true, user })),
    on(AuthActions.loginFailure, (state) => ({ ...state, isAuthenticated: false, user: null })),
    on(AuthActions.logout, () => initialState)
);

export function reducer(state: AuthState | undefined, action: any) { // Cambia 'Action' a 'any'
    return authReducer(state, action);
}
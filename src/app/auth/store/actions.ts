import { createAction, createActionGroup, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentuserInterface } from "../../shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../types/backendErrors.interface";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentuserInterface }>(),
    'Register Failure': props<{errors: BackendErrorsInterface}>()
  }
})

// replaced by above code
// export const register = createAction('[Auth] Register', props<{ request: RegisterRequestInterface }>())
// export const registerSuccess = createAction('[Auth] Register Success', props<{ request: RegisterRequestInterface }>())
// export const registerFailure = createAction('[Auth] Register Failure', props<{ request: RegisterRequestInterface }>())


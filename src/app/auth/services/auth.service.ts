import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentuserInterface } from '../../shared/types/currentUser.interface';
import { Observable, map } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentuserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.http
    .post<AuthResponseInterface>(url, data)
    .pipe(map(res => res.user));
  }
}

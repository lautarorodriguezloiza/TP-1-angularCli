import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:3000/login'; 

    constructor(private http: HttpClient) {}

  // Ejemplo de cómo hacer una petición POST usando HTTPS
    login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`; // Endpoint HTTPS
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers });
    }
}
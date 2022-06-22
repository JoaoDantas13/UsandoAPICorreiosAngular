import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepServiceService {
  constructor(private httpClient: HttpClient) {}

  buscarCep(cep: string) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}

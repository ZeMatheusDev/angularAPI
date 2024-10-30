import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:8000/getUsers"
  constructor() { }

  async getData(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
  }
}


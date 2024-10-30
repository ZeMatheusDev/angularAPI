import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../app/services/api.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      this.data = await this.apiService.getData();
      console.log('Dados recebidos:', this.data);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }

  title = 'utilizarapis';
}

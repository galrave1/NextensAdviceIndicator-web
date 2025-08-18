import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { WealthTaxReport, PropertyGrowthReport } from './Models';

@Injectable({ providedIn: 'root' })
export class ReportsService {
  private readonly base = environment.apiBase || '';

  constructor(private http: HttpClient) {}

  wealth(): Observable<WealthTaxReport[]> {
    return this.http.get<WealthTaxReport[]>(`${this.base}/api/reports/wealth`);
  }

  property(): Observable<PropertyGrowthReport[]> {
    return this.http.get<PropertyGrowthReport[]>(`${this.base}/api/reports/property-growth`);
  }

}

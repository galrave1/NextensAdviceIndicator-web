import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../reports-service';
import { WealthTaxReport } from '../../Models';

@Component({
  selector: 'app-wealth-report-component',
  standalone: false,
  templateUrl: './wealth-report-component.html',
  styleUrl: './wealth-report-component.css'
})
export class WealthReportComponent  implements OnInit {
  loading = true;
  error?: string;
  rows: WealthTaxReport[] = [];

  constructor(private api: ReportsService) {}

  ngOnInit(): void {
    this.api.wealth().subscribe({
      next: data => { this.rows = data ?? []; this.loading = false; },
      error: err => { this.error = err?.message ?? 'Failed to load'; this.loading = false; }
    });
  }
}

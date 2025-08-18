import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../reports-service';
import { PropertyGrowthReport } from '../../Models';

@Component({
  selector: 'app-property-growth-report-component',
  standalone: false,
  templateUrl: './property-growth-report-component.html',
  styleUrl: './property-growth-report-component.css'
})
export class PropertyGrowthReportComponent implements OnInit {
  loading = true;
  error?: string;
  rows: PropertyGrowthReport[] = [];

  constructor(private api: ReportsService) {}

  ngOnInit(): void {
    this.api.property().subscribe({
      next: data => { this.rows = data ?? []; this.loading = false; },
      error: err => { this.error = err?.message ?? 'Failed to load'; this.loading = false; }
    });
  }
}

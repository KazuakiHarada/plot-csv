// src/utils/parseCSV.ts
import Papa from 'papaparse';

export function parseCSV(csv: string) {
  const result = Papa.parse(csv, { header: true });
  const series: Record<string, (number | null)[]> = {};

  if (Array.isArray(result.data)) {
    for (const row of result.data as any[]) {
      const keys = Object.keys(row);
      if (keys.length === 0) continue;

      for (const key of keys) {
        if (!series[key]) series[key] = [];
        const value = parseFloat(row[key]);
        series[key].push(isNaN(value) ? 0 : value); // Convert NaN to 0
      }
    }
  }

  return { series };
}
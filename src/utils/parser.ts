// src/utils/parseCSV.ts
import Papa from 'papaparse';

export function parseCSV(csv: string) {
  const result = Papa.parse(csv, { header: true });
  const labels: string[] = [];
  const series: Record<string, (number | null)[]> = {};

  if (Array.isArray(result.data)) {
    for (const row of result.data as any[]) {
      const keys = Object.keys(row);
      if (keys.length === 0) continue;

      const xLabel = row[keys[0]];
      labels.push(xLabel);

      for (const key of keys.slice(1)) {
        if (!series[key]) series[key] = [];
        const value = parseFloat(row[key]);
        series[key].push(isNaN(value) ? null : value);
      }
    }
  }

  return { labels, series };
}

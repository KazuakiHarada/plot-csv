import { defineStore } from 'pinia';

export const useCsvStore = defineStore('csv', {
  state: () => ({
    csvName: '' as string,
    xKey: '' as string,
    series: {} as Record<string, number[]>,
    visibility: {} as Record<string, boolean>,
    colors: {} as Record<string, string>,
    colorPalette: [
      '#ff6183',
      '#37a3eb',
      '#cd69ff',
      '#ffa142',
      '#4cc0c8'
    ],
    colorIndex: 0,
  }),
  actions: {
    async loadCSV() {
      const { pickAndReadCSV } = await import('../utils/load-file');
      const { parseCSV } = await import('../utils/parser');
      const csv = await pickAndReadCSV();
      if (!csv) {
        alert('CSVファイルを選択してください');
        return;
      }
      const { name, contents } = csv;
      const parsed = parseCSV(contents);
      this.setData(name, parsed.series);
    },
    setData(name: string, series: Record<string, (number | null)[]>) {
      this.csvName = name;
      this.xKey = '';
      this.series = {};
      this.visibility = {};
      this.colors = {};
      this.colorIndex = 0;
      for (const key in series) {
        if (this.xKey == '') {
          this.xKey = key;
        }
        this.series[key] = series[key].filter((v): v is number => v !== null);
        this.visibility[key] = true;
        this.colors[key] = this.getNextColor();
      }
    },
    setX(label: string) {
      this.xKey = label;
    },
    toggleVisibility(key: string) {
      this.visibility[key] = !this.visibility[key];
    },
    getNextColor(): string {
      const color = this.colorPalette[this.colorIndex % this.colorPalette.length];
      this.colorIndex++;
      return color;
    },
  },
});

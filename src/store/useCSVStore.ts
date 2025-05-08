import { defineStore } from 'pinia';

export const useCsvStore = defineStore('csv', {
  state: () => ({
    csvName: '' as string,
    xKey: '' as string,
    series: {} as Record<string, number[]>,
    visibility: {} as Record<string, boolean>,
    colors: {} as Record<string, string>,
    colorPalette: [
      '#ff6384',
      '#36a2eb',
      '#cc65fe',
      '##ffce56',
    ],
    colorIndex: 0,
  }),
  actions: {
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

import { defineStore } from 'pinia';

export const useCsvStore = defineStore('csv', {
  state: () => ({
    labels: [] as string[],
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
    setData(labels: string[], series: Record<string, (number | null)[]>) {
      this.labels = labels;
      this.series = {};
      this.visibility = {};
      this.colors = {};
      this.colorIndex = 0;
      for (const key in series) {
        this.series[key] = series[key].filter((v): v is number => v !== null);
        this.visibility[key] = true;
        this.colors[key] = this.getNextColor();
      }
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

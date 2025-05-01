import { defineStore } from 'pinia';

export const useCsvStore = defineStore('csv', {
  state: () => ({
    labels: [] as string[],
    series: {} as Record<string, number[]>,
    visibility: {} as Record<string, boolean>,
  }),
  actions: {
    setData(labels: string[], series: Record<string, (number | null)[]>) {
      this.labels = labels;
      this.series = {};
      this.visibility = {};
      for (const key in series) {
        this.series[key] = series[key].filter((v): v is number => v !== null);
        this.visibility[key] = true;
      }
    },
    toggleVisibility(key: string) {
      this.visibility[key] = !this.visibility[key];
    },
  },
});

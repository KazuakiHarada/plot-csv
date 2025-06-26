import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Hello World",
      file_update: "Update File",
      x_axis: "X Axis",
      y_axis: "Y Axis",
      hide_all: "Hide All",
      landing_title: "Welcome to Easy CSV Scatter",
      landing_desc: "Visualize your CSV data easily.",
      landing_load: "Load CSV File"
    }
  },
  ja: {
    message: {
      hello: "こんにちは世界",
      file_update: "ファイルを更新",
      x_axis: "X軸",
      y_axis: "Y軸",
      hide_all: "全て非表示にする",
      landing_title: "Easy CSV Scatter へようこそ",
      landing_desc: "CSVデータを簡単に可視化できます。",
      landing_load: "CSVファイルを読み込む"
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  fallbackLocale: "en",
  messages
});

export default i18n;

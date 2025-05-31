import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Hello World",
      file_update: "Update File",
      x_axis: "X Axis",
      y_axis: "Y Axis",
      hide_all: "Hide All"
    }
  },
  ja: {
    message: {
      hello: "こんにちは世界",
      file_update: "ファイルを更新",
      x_axis: "X軸",
      y_axis: "Y軸",
      hide_all: "全て非表示にする"
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

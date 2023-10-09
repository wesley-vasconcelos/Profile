// i18n.js
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "pt-BR", // Idioma padrão
  messages: {
    "pt-BR": require("./locales/pt-BR.json"), // Arquivo de tradução para Português
    "en-US": require("./locales/en-US.json"), // Arquivo de tradução para Inglês
  },
});

export default i18n;

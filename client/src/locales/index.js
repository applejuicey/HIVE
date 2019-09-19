import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const locales = {
  zh: require('./zh.json'),
  en: require('./en.json'),
};

const i18n = new VueI18n({
  locale: 'en',
  messages: locales,
});

export default i18n;
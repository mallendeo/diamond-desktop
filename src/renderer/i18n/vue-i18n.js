import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'
import numberFormats from './number-formats'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en-US',
  messages,
  numberFormats
})

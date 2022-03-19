// 参考: https://vuejs-org.translate.goog/guide/reusability/composables.html?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc
// 参考: https://v3.nuxtjs.org/docs/directory-structure/composables#composables-directory
export const useFoo = () => {
  return useState('foo', () => 'bar')
}

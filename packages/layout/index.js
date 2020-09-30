import Row from "./row.vue";
import Col from "./col.vue";
Row.install = Vue => Vue.component(Row.name, Row);
Col.install = Vue => Vue.component(Col.name, Col);
export {
  Row,
  Col
};

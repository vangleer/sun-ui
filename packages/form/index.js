import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkboxGroup.vue'
import Switch from './switch.vue'
import Rate from './rate.vue'
import Stepper from './stepper.vue'
import Input from './input.vue'
Checkbox.install = Vue => Vue.component(Checkbox.name, Checkbox);
CheckboxGroup.install = Vue => Vue.component(CheckboxGroup.name, CheckboxGroup);
Switch.install = Vue => Vue.component(Switch.name, Switch);
Rate.install = Vue => Vue.component(Rate.name, Rate);
Stepper.install = Vue => Vue.component(Stepper.name, Stepper);
Input.install = Vue => Vue.component(Input.name, Input);
export {
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate,
  Stepper,
  Input
}

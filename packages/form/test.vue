<template>
  <label :class="[
        'checkbox-item',
        { 'is-checked': isChecked },
        { 'is-disabled': isDisabled }
    ]" @click.stop="handleClick">
    <span class="checkbox-input">
      <fat-icon name="check" />
    </span>

    <input v-if="false" type="checkbox" v-bind="$attrs" :value="model" @click.stop>

    <slot></slot>
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      propValue: {
        type: [String, Number, Boolean]
      }
    },
    model: {
      prop: "propValue",
      event: "select"
    },
    computed: {
      isGroup() {
        return this.$parent.$options._componentTag === "fat-checkbox-group";
      },
      isDisabled() {
        return this.$parent.disabled || this.disabled;
      },
      isChecked() {
        const {
          isGroup,
          model
        } = this;
        if (!isGroup) return model;

        const {
          value,
          $parent: {
            value: selectItems
          }
        } = this;

        return selectItems.some(item => item === value);
      },
      model: {
        get() {
          return this.isGroup ? this.$parent.value : this.propValue;
        },
        set(newValue) {
          const {
            isGroup,
            isChecked
          } = this;

          if (isGroup) {
            isChecked
              ?
              this.$parent.deleteItem(newValue) :
              this.$parent.selectItem(newValue);
          } else {
            this.$emit("select", newValue);
          }
        }
      }
    },
    methods: {
      handleClick(event) {
        const {
          isDisabled,
          isGroup,
          model,
          value
        } = this;
        if (!isDisabled) {
          this.model = isGroup ? value : !model;
        }
      }
    }
  };

</script>

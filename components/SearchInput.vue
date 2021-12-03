<template>
  <div class="d-inline-flex search-input">
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      :placeholder="placeholder"
      type="text"
      class="tui-input"
      :class="{ error: error, disabled: disabled }"
      :disabled="disabled"
      :readonly="readOnly"
      :data-text-input="label"
      @input="update($event.target.value)"
    />
    <i v-if="info" class="info-icon">
      Some info tooltip
    </i>
    <label v-if="error" class="tui-input__error" :data-error="error">
      <span>
        {{ error }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    error: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    info: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    update(val) {
      this.$emit("input", val);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

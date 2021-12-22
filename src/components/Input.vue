<template>
  <div class="input">
    <label v-if="label">{{ label }}</label>
    <input type="text" :name="name" :placeholder="placeholder" :value="value" />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    name: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
    value: { type: String, required: false, default: "" },
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;

  label {
    color: $gray;
    display: block;
    font-size: $fontSizeDefault;
    font-weight: $fontWeightMedium;
    margin-bottom: 6px;
  }

  input {
    border: 1px solid $gray;
    color: $black;
    font-size: $fontSizeDefault;
    outline: none;
    padding: 8px 12px;
    transition: border 0.2s ease-in-out;

    ::placeholder {
      opacity: 0.4;
    }

    &:focus,
    &:active {
      border-color: $gray;
    }
  }
}
</style>

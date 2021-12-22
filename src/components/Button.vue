<template>
  <button
    @click="onClick"
    class="button"
    :class="{
      active: active,
      block: display === 'block',
      default: theme === 'default',
      primary: theme === 'primary',
    }"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    display: {
      type: String,
      required: false,
    },
    theme: {
      type: String,
      default: "primary",
      required: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  background: $primary;
  border: none;
  color: $white;
  cursor: pointer;
  font-size: $fontSizeDefault;
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;

  &.default {
    background: transparent;
    border: 1px solid $primary;
    color: $primary;
  }

  &.block {
    width: 100%;
  }

  &:hover:not([disabled]),
  &.active {
    background: darken($primary, 5);
    color: $white;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>

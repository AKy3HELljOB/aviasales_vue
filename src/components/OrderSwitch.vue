<template>
  <div class="switch">
    <Button
      v-for="value in values"
      :key="value.key"
      :name="value.key"
      :styleCss="value.style"
      :text="value.text"
    ></Button>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
import { OrderTypes } from "../store/state"

export default {
  components: {
    Button
  },
  setup() {
  const values: Array<{key: string, style: string, text: string}> = [
    { key: OrderTypes.CHEAPEST, style: "button left", text: "Самый дешевый" },
    { key: OrderTypes.FASTEST, style: "button right", text: "Самый быстрый" },
  ];
  return {
    values
  }
  }
}
</script>

<style lang="less">
.switch {
  position: relative;
  display: inline-block;
  width: 100%;
  text-transform: none;
  border: 1px solid #dfe5ec;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.button {
  position: relative;
  display: inline-block;
  width: calc((100% - 1px) / 2);
  padding: 15px;
  background-color: #ffffff;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
.left {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.right {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.input:checked + .button {
  background-color: #2196f3;
  width: calc((100% - 1px) / 2 + 1px);
  color: #ffffff;
}

.button:hover {
  cursor: pointer;
}
</style>


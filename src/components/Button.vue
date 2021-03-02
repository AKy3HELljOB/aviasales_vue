<template>
  <span :key="key">
    <input
      type="radio"
      class="input visually-hidden"
      :id="key"
      :value="key"
      :checked="order"
    />
    <label :for="key" :class="styleCss" @click="setOrder">
      {{ text }}
    </label>
  </span>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props:{
    key: String,
    name: String,
    styleCss: String,
    text: String,
  },
  setup(props: any) {
    const store = useStore();
    const order = computed(() => store.state.order.order === props.name);
    const setOrder = () => store.dispatch("order/SET_ORDER", props.name);

    return {
      order,
      setOrder
    };
  }
}
</script>

<style scoped lang="less">
.input {
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
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
</style>


<template>
  <div class="filter">
    <h1>Количество пересадок</h1>
    <div v-for="value in values" :key="value.key">
      <label class="checkbox">
        <input
          type="checkbox"
          class="input visually-hidden"
          @change="setFilter(value.key)"
          :checked="value.checked"
        />
        <span class="checked" />
        {{value.text}}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { FilterTypes } from "../store/state";

export default {
  setup() {
    const store = useStore();
    const setFilter = (name: string) => store.commit("SET_FILTER", name);
    const filterState = computed(() => store.state.filter);
    const filterStateAll = computed(() => store.state.filter.all);

    const values: Array<{ text: string; checked: boolean; key: string }> = [
      { text: "Все", checked: filterStateAll, key: FilterTypes.ALL },
      { text: "Без пересадок", checked: filterState.value.none, key: FilterTypes.NONE },
      { text: "1 пересадка", checked: filterState.value.one, key: FilterTypes.ONE },
      { text: "2 пересадки", checked: filterState.value.two, key: FilterTypes.TWO },
      { text: "3 пересадки", checked: filterState.value.three, key: FilterTypes.THREE },
    ];
    return {
      values,
      filterState,
      setFilter
    };
  },
};
</script>

<style scoped lang="less">

.filter {
    margin: 0px 10px 10px 103px;
    grid-area: Filter;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
     display: inline-block;
    width: 232px;
    height: 252px; 
}
.filter h1 {
    margin: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
}

.checkbox {
  padding: 10px 70px 10px 50px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-transform: none;
  font-weight: 400;
  font-size: 13px;
}

.checked {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: -30px;
  background-image: url(../assets/unchecked.svg);
}

.input:checked + .checked {
  background-image: url(../assets/checked.svg);
}

.checkbox:hover {
  background: #f1fcff;
  cursor: pointer;
}
</style>
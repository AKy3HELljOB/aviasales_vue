<template>
  <div class="app unselectable">
    <div class="appHeader">
      <img src="./assets/logo.svg" alt="Aviasales logo" @click="log"/>
    </div>
    <div class="app-wrapper">
      <Filter />
      <div class="tab">
        <OrderSwitch />
      </div>
      <!-- {Tickets(currentPageTickets)} -->
    </div>
  </div>
</template>

<script lang="ts">
import OrderSwitch from "./components/OrderSwitch.vue";
import Filter from "./components/Filter.vue";
import { getRequestId } from "./api/ticket"

export default {
  components: {
    OrderSwitch,
    Filter
  },
  setup() {
    getRequestId()
  },
  log(e: Event) {console.log(e)}
}
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
  text-transform: uppercase;
}

.unselectable {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                    not supported by any browser */
}

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

.app {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  width: 960px;
  height: 1350px;
  background: #f3f7fa;
  margin: auto;
}

.app-wrapper {
  display: grid;
  grid-template-areas: "Filter Tab" "Filter Tickets";
}

.appHeader {
  text-align: center;
  padding-top: 39px;
  padding-bottom: 32px;
}

.filter {
  margin: 0px 10px 10px 103px;
  grid-area: Filter;
  background: #ffffff;
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

.tab {
  margin: 0px 102px 10px 10px;
  grid-area: Tab;
  display: inline-block;
  width: 503px;
  height: 50px;
}

.tickets {
  grid-area: Tickets;
}
</style>

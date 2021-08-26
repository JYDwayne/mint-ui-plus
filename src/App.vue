<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import 'src/assets/font/iconfont.css';

export default defineComponent({
  name: "App",
  components: {
    RouterView,
  },
  computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
});
</script>

<style>
  @reset-global mobile;

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
  }

  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

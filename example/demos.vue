<template>
  <!-- <section class="page-demo">
    <div>demos 页</div>
    <div v-for="(group, index) in navs" :key="index">
      {{ group.title }}
    </div>
  </section> -->
  <section class="page-demo">
    <div v-for="(group, index) in navs" :key="index">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell
        v-for="(item, groupIndex) in group.list"
        :key="item.name + groupIndex"
        :to="item.path"
        is-link>
        <template v-slot:title>
          <div>
            <i :class="['indexicon', 'icon-' + item.icon]"></i>
            <span>{{ item.name }}</span>
          </div>
        </template>
      </mt-cell>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { navs } from "../src/route.config";
export default defineComponent({
  name: "Demos",
  data() {    
    return {
      navs,
    };
  },
});
</script>

<style>
.page-demo {
  padding-bottom: 50px;

  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;
    }

    &.icon-checklist {
      font-size: 18px;
    }
  }
}
@component-namespace page {
  @component title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }

  @component part {
    margin-bottom: 15px;
  }
}
</style>

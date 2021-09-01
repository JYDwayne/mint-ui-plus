<template>
  <transition name="mint-toast-pop" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<style>
  @component-namespace mint {
    @component toast {
      position: fixed;
      max-width: 80%;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
  
      @descendent icon {
        display: block;
        text-align: center;
        font-size: 56px;
      }
      
      @descendent text {
        font-size: 14px;
        display: block;
        text-align: center;
      }
      
      @when placetop {
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      @when placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      @when placebottom {
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      @descendent pop-enter, pop-leave-active {
        opacity: 0;
      }
    }
  }
</style>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, computed } from "vue";

  export default defineComponent({
    name: 'Toast',
    emits: ['destroy'],
    props: {
      message: String,
      duration: {
        type: Number,
        default: 1000
      },
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      },
      onClose: {
        type: Function as PropType<() => void>,
        required: true,
      }
    },

    setup(props) {
      const visible = ref(false);

      const customClass = computed(() => {
        const position: string = props.position;
        const className: string = props.className;
        let result: string = '';
        if (position === 'top') {
          result = 'is-placetop ';
        } else if(position === 'bottom') {
          result = 'is-placebottom ';
        } else {
          result = 'is-placemiddle ';
        }
        return result + className;
      })

      let timer = null

      function startTimer() {
        if (props.duration > 0) {
          timer = setTimeout(() => {
            if (visible.value) {
              close()
            }
          }, props.duration)
        }
      }

      function clearTimer() {
        clearTimeout(timer)
        timer = null
      }

      function close() {
        visible.value = false
      }

      onMounted(() => {
        visible.value = true;
        startTimer();
      })
      return {
        visible,
        customClass
      }
    }
  });
</script>

import ToastConstructor from './toast.vue';
import { createVNode, render, isVNode } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { IToastHandle, IToastOption } from './types';

// TODO 一次只显示一个toast

const Toast: IToastHandle = function (opts: IToastOption = {}) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  let options: IToastOption = <IToastOption>opts

  options = {
    ...options,
    onClose: () => {
      opts.onClose?.()
    }
  }

  const container = document.createElement('div')
  const message = options.message
  const vm = createVNode(
      ToastConstructor,
      options,
      isVNode(options.message) ? {default: () => message} : null,
  );

  // clean message element preventing mem leak then the VNode should be collected by GC as well
  vm.props.onDestroy = () => {
    render(null, container);
  }

  render(vm, container)

  document.body.appendChild(container.firstElementChild)

  return {
    close: () => (vm.component.proxy as ComponentPublicInstance<{visible: boolean;}>).visible = false,
  }

} as any;



export default Toast;

import ToastConstructor from './toast.vue';
import type {ComponentPublicInstance} from 'vue'
import {createVNode, isVNode, render, VNode} from 'vue'
import {IToastHandle, IToastOption, ToastParams} from './types';

let isRunning: boolean = false;
let vmQueue: Array<VNode> = [];
let runningToast: VNode;

const Toast: IToastHandle = function (opts: ToastParams = {} as ToastParams) {
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


  const message = options.message
  const vm = createVNode(
    ToastConstructor,
    options,
    isVNode(options.message) ? {default: () => message} : null,
  );

  vmQueue.push(vm);

  function runToast(): VNode {
    if (isRunning) return runningToast;
    isRunning = true;
    let tempRunningToast: VNode = vmQueue.shift() as VNode;
    if (!tempRunningToast) {
      isRunning = false;
      return runningToast;
    }

    const container = document.createElement('div')

    // clean message element preventing mem leak then the VNode should be collected by GC as well
    tempRunningToast.props.onDestroy = () => {
      render(null, container);
      isRunning = false;
      runningToast = runToast();
    }
    render(tempRunningToast, container);
    document.body.appendChild(container.firstElementChild);
    return tempRunningToast;
  }

  runningToast = runToast();

  return {
    close: () => (runningToast.component.proxy as ComponentPublicInstance<{ visible: boolean; }>).visible = false,
  }

} as any;


export default Toast;

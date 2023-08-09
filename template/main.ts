// import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index"; // 导入路由配置

// const app = createApp(App);
// app.use(router); // 使用路由配置
// app.mount("#app");

import { createApp } from "vue";
// import mitt from 'mitt';
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// 挂载函数
function render(props: any) {
  const app = createApp(App);
  const { container } = props;
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app"); // 这个ID为index.html中div的ID名称
  // app.config.globalProperties.mittBus = mitt();
}

renderWithQiankun({
  mount(props) {
    console.log(props);
    render(props);
    // store.commit("updateUserInfo",props);
    // // 在vue全局注册主应用的状态监听和状态改变事件
    // app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    // app.config.globalProperties.$setGlobalState = props.setGlobalState;
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount() {
    console.log("unmount");
    // app.unmount();
  },
  update() {
    console.log("update");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

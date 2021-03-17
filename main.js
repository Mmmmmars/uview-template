import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import httpInterceptor from "@/common/http.interceptor.js";
import httpApi from "@/common/http.api.js";
import utils from "@/common/util.js";

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({ ...App });

Vue.use(uView);
Vue.use(httpInterceptor, app);
Vue.use(httpApi, app);

app.$mount();

// components/index.js
import components from "./src/index";
import "element-plus/dist/index.css";

export * from "./src/index";

export default {
  install: (app) => Object.values(components).forEach((c) => app.use(c)),
};

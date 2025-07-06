import { registerApplication, start, LifeCycles } from "single-spa";

//registerApplication({
// name: "@single-spa/welcome",
// app: () =>
// System.import<LifeCycles>(
// "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
// ),
// activeWhen: ["/home"],
//});

registerApplication({
  name: "@mfe-login",
  app: () => System.import<LifeCycles>("@mfe-login"),
  activeWhen: ["/login"],
});

start({
  urlRerouteOnly: true,
});

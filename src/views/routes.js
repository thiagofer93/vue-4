import Home from "./Index";
import Thread from "./Thread";
import NotFound from "./NotFound";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thread/:thread_slug",
    props: true,
    name: "Thread",
    component: Thread,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "*",
    redirect: { name: "NotFound" },
  },
];

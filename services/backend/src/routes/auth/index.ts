import login from "./login";
import logout from "./logout";

export default {
  path: "/auth",
  routers: [login, logout],
};

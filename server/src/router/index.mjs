import userController from "../controller/user-controller.mjs";

const AppRoutes = [
  {
    path: "/test",
    method: "get",
    action: userController.test
  },
];

export default AppRoutes;



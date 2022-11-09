import { routes } from "shared/routes";
import { LoginForm } from "shared/types/forms";
import { instance } from "../_axios";

export const login = async (values: LoginForm) => {
  const response = await instance.post(routes.api.user.login, values);
  return response;
};

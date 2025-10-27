import { usersList } from "../models/user.model.js";

export const handleUsers = (req, res) => {
  const userData = usersList();
  res.render("userList", { users: userData });
};

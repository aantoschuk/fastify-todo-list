import { mockedUsers } from "../../mocks/user";

export const getUserHandler = (id: number) =>
  mockedUsers.find((user) => user.id === id);

export const deleteUserHandler = (id: number) => {
  const fakeUpdatedUsers = mockedUsers.filter((user) => user.id !== id);
  return fakeUpdatedUsers;
};

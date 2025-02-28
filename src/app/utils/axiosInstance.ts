import api from "./baseApi";

const getUsers = async () => {
  try {
    const { data } = await api.get("/users");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getUsers();

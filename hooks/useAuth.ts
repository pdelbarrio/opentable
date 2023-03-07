import axios from "axios";

const url = "http://localhost:3000/api/auth/signin";

const useAuth = () => {
  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;

import ky from "ky";

const instance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_APP_API_URL,
});

export default instance;

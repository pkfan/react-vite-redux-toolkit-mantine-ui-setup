import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "@/config";

// we can use axios and overide fatchBaseQuery here
export default fetchBaseQuery({ baseUrl: config.baseUrl });

import axios from "axios"

const api = axios.create({
  baseURL: "https://bsproxy.royaleapi.dev/v1",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    Accept: "application/json",
  },
})

export default api

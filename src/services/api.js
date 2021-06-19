import axios from "axios"

const api = axios.create({
  baseURL: "https://api.brawlstars.com/v1",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA2MTg1MzgwLTk1ZmYtNDE0Mi05NjBlLWVlYTM0ODAxNzliYyIsImlhdCI6MTYyNDE0MjUyNywic3ViIjoiZGV2ZWxvcGVyLzcyNzJlN2I0LWY1NTctMmNiZS0xNTBkLWIxYWI4YWNkYWIzNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.h0UqB-dSr0BIeBcKPTiYTwxpxuuQBTTQu24OkEhHoHkWkCCTXUcsC1d9FUfXq0gzEj6YGyEyJmNf8WBXmWScoQ",
    Accept: "application/json",
  },
})

export default api

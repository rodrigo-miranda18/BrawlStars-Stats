import axios from "axios"

const api = axios.create({
  baseURL: "https://api.brawlstars.com/v1",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg2MDNlZWRiLWZkZWQtNGQzMy05ODM1LTY5NjdjNGQ4MjcyNSIsImlhdCI6MTYyMzkzNDQwNiwic3ViIjoiZGV2ZWxvcGVyLzcyNzJlN2I0LWY1NTctMmNiZS0xNTBkLWIxYWI4YWNkYWIzNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkxLjE3Ny4xODAuNDYiXSwidHlwZSI6ImNsaWVudCJ9XX0.q8Uln_ME-7uVpQKDXAhckuD8dSAMJvOAhrDP0xRIC3FJIGaLoFnZcb4a5C4nTRFkyr1FpxVA9-Ri-hlGuNeYoA",
    Accept: "application/json",
  },
})

export default api

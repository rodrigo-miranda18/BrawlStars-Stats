import axios from "axios"

const api = axios.create({
  baseURL: "https://api.brawlstars.com/v1",
  headers: {
    authorization: 
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRkYzdjY2U2LTlhMzYtNGZhYy1iYzRhLWYyYmIyNGFhM2JiMCIsImlhdCI6MTYzMDQxNjMxMiwic3ViIjoiZGV2ZWxvcGVyLzcyNzJlN2I0LWY1NTctMmNiZS0xNTBkLWIxYWI4YWNkYWIzNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkxLjE3Ny4xODYuMTY5Il0sInR5cGUiOiJjbGllbnQifV19.Tn6skHfc1aUON9Q1ZB9Cwduadam4fx4VMKaDvQe9-lxzzd3CKKphV_advkiK_PwcJXYFmOnI5WIVBova2eyjNw",
    Accept: "application/json",
  },
})

export default api

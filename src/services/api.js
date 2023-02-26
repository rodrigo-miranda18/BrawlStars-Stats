import axios from "axios"

const api = axios.create({
  baseURL: "https://bsproxy.royaleapi.dev/v1",
  headers: {
    authorization: 
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYzOTZkODJlLTg2YjItNGVmYy04NTIyLTQ2YTQ0NzA1YThlYiIsImlhdCI6MTY3NzQxNTk5MCwic3ViIjoiZGV2ZWxvcGVyLzcyNzJlN2I0LWY1NTctMmNiZS0xNTBkLWIxYWI4YWNkYWIzNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.NYg8LyRdwG-Jjzmg62i78F8H-f-xiJ-tOd8yeZTJa3cl3iSCXUkUI6gnBVpipHvUMV7UzTwl6FRZjmNpCshfQA",
    Accept: "application/json",
  },
})

export default api

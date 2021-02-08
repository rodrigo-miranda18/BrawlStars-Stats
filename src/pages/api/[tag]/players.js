export default async (req,res) => {
  const config = {
    headers:{
      "authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRjYjIxNDg5LTZhMmYtNDg5MS04OGIzLTNjZmVmZmQyOWJmYiIsImlhdCI6MTYxMjEzNDA0Miwic3ViIjoiZGV2ZWxvcGVyLzcyNzJlN2I0LWY1NTctMmNiZS0xNTBkLWIxYWI4YWNkYWIzNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkxLjE3Ny4xODAuNzQiXSwidHlwZSI6ImNsaWVudCJ9XX0.iyHjRVETdV_cUFIAhgHsYg67CJZR-0Ma3_zhhMFyOtYnGMbhr9ghwVS48BVUVGaHpHZYo-AEpiI8SW_io3VW7Q",
      "Accept":"application/json"
    }
  }

  const url = "https://api.brawlstars.com/v1/players/%23"+req.query.tag

  try{
    const response = await (await fetch(url,config)).json()

    return res.status(200).send(response)
  }catch(err){
    return res.status(404).send(err)
  }
}
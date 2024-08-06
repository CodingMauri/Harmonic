import {useEffect,} from "react"
import axios from 'axios'
const SpotifyCallback = () => {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get("code")

        if(code){

          axios.get('./api/getSpotifyToken',{code})
          .then(res => {
            console.log(' Access Token ' , res.data.access_token);
          })
          .catch(err => {
            console.log(err, "error exchanging token")
          })
        }
    })
  
}

export default SpotifyCallback
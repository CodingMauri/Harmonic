
export const Hero = () => {


    const handleLogin = () => {
        const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
        const redirectURI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
        const scopes = [
            'user-read-private',
            'user-read-email',
            'playlist-read-private',
            'user-library-read',
            'user-library-modify',
            'user-top-read',
        
        ]
        const scopeString = scopes.join(" ")

        console.log(scopeString)

        const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopeString)}`;

        window.location.href = AUTH_URL

        
    }
  return (
    <div className = "flex flex-col justify-center items-center w-full h-full p-10">
        <h1 className=" h-12 pb-20 font-klender text-white text-5xl underline decoration-accent ">Harmonic</h1>
        <button onClick = {handleLogin} className = "bg-green-400 p-2 rounded-xl text-white font-bold ">Log into Spotify</button>
    </div>
  )
}

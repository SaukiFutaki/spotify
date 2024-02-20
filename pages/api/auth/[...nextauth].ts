import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
].join(",")

const params = {
  scope: scopes,
};

async function refreshAccessToken(token: any) {
  // const client_id = process.env.SPOTIFY_CLIENT_ID || "YOUR_CLIENT";
  // const client_secret = process.env.SPOTIFY_SECRET || "YOUR_SECRET";
 const params = new URLSearchParams()
 params.append("grant_type", "refresh_token")
  params.append("refresh_token", token.refreshToken)

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET).toString('base64'))
    },
    body : params
  });
  const data = await response.json()
  return {
    accesToken : data.access_token,
    refreshToken : data.refresh_token ?? token.refreshToken,
    accessTokenExpires : Date.now() + data.expires_in * 1000,
  }
}
const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID || "YOUR_CLIENT",
      clientSecret: process.env.SPOTIFY_SECRET || "YOUR_SECRET",
      authorization: LOGIN_URL
    }),

  ],
secret : process.env.JWT_SECRET ,
pages : {
  signIn :"/login",

},
callbacks : {
  async jwt({ token, account } : {token : any, account : any}) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken  = account.access_token
      token.refreshToken = account.refresh_token
      token.accessTokenExpires = account.expires_at
      return token
    }

    //acces token has not expired
    if(Date.now() < token.accessTokenExpires * 1000) {
      return token
    }
    return refreshAccessToken(token)
  },
  async session({ session, token, user } : {session : any, token : any, user : any}) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
}

export default NextAuth(authOptions)


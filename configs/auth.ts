import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authConfig: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
      // GithubProvider({
      //   clientId: process.env.GITHUB_ID!,
      //   clientSecret: process.env.GITHUB_SECRET!,
      // }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
      // ...add more providers here
    ],
    pages: {
    }  
  }
  
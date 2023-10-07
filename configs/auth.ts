import { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? '' ,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID ?? "",
        //     clientSecret: process.env.GITHUB_SECRET ?? "",
        //   }),
        Credentials({
            credentials: {
              email: { label: "email", type: "email", required: true },
              password: { label: "password", type: "password", required: true },
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials.password ) {
                throw new Error("Invalid email or password");
              }
              return {
                email: "admin@example.com",
                name: "Admin",
                id: "test-id",
              };
            },
          }),
        ],

    // session: {
    //     strategy: "jwt",
    // },
}
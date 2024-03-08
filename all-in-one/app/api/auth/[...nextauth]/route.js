import NextAuth from "next-auth/next";
import credentialsProviders from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    credentialsProviders({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const user = { id: "1" };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

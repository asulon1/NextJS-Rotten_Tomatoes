import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async session({session, token, user}) {
      session.user.username = session.user.name
      .split(" ")
      .join("")
      .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    }
  }
})
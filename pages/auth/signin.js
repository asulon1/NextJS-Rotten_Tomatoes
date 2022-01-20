import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() =>
                SignIntoProvider(provider.id, { callbackUrl: "/" })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

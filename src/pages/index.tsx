import { type NextPage } from "next";

import { api } from "~/utils/api";

import Head from "next/head";
import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser();

  return (
    <>
      <Head>
        <title>Diablo 4 Stats</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#7f1d1d] to-[#020617]">
        <div className="text-slate-50">Welcome to Diablo 4 Stats - Login to your Battle.net account</div>
        <div>
          {!user.isSignedIn && <SignInButton />}
          {user.isSignedIn && <SignOutButton />}
        </div>
      </main>
    </>
  );
};

export default Home;

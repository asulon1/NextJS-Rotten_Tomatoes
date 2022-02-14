/* eslint-disable @next/next/no-img-element */
import {
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
  LogoutIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow mt-6 justify-evenly max-w-2xl ">
        <button onClick={() => router.push("/")}>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </button>
        <button onClick={() => router.push("/")}>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        </button>
        {/* <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /> */}
        <button onClick={() => router.push("/collection/favlist")}>
          <HeaderItem title="FAVORITES" Icon={StarIcon} />
        </button>
        {/* <HeaderItem title="SEARCH" Icon={SearchIcon} /> */}
        {/* Search bar */}

        {session ? (
          <>
            <img
              onClick={() => router.push("/profil/mypage")}
              src={session.user.image}
              alt="profil"
              className="h-10 rounded-full cursor-pointer hover:animate-bounce"
              title="Profil"
            />
            <button onClick={signOut}>
              <HeaderItem title="LOG OUT" Icon={LogoutIcon} />
            </button>
          </>
        ) : (
          <button onClick={signIn}>
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          </button>
        )}
      </div>

      <Image
        alt=""
        onClick={() => router.push("/")}
        className=" h-8 mb-1 object-contain hover:cursor-pointer transition duration-500 
        transform hover:scale-110"
        src="https://zupimages.net/up/22/02/jjbt.png"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

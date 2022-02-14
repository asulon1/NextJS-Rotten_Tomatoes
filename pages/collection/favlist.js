/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { ThumbUpIcon } from "@heroicons/react/outline";
import FlipMove from "react-flip-move";
import { useRouter } from "next/router";

function Favlist() {
  const cart = useSelector((state) => state.cart);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  console.log(cart);

  return (
    <div className="relative">
      <Head>
        <title>Favorite list</title>
      </Head>
      <Header />
      <Nav />

      <div>
        {cart.length === 0 ? (
          <h1> </h1>
        ) : (
          <>
            {cart.map((item) => (
              <FlipMove
                className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
                    3xl:flex flex-wrap justify-center"
              >
                <div
                  onClick={() => router.push(`/movie/${item.id}`)}
                  className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
                >
                  <Image
                    alt=""
                    layout="responsive"
                    src={
                      `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
                      `${BASE_URL}${item.poster_path}`
                    }
                    height={1080}
                    width={1920}
                  />

                  <div className="p-2">
                    <p className="truncate max-w-md">{item.overview}</p>
                    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                      {item.title || item.original_name}
                    </h2>
                    <p className="flex items-center opacity-0 group-hover:opacity-100">
                      {item.media_type && `${item.media_type} `}{" "}
                      {item.release_date || item.first_air_date} •{" "}
                      <ThumbUpIcon className="h-5 mx-2" /> {item.vote_count}
                    </p>
                  </div>
                </div>
              </FlipMove>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Favlist;

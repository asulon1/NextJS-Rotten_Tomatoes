/* eslint-disable @next/next/no-img-element */
import Header from "../../components/Header";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav";
import { useState } from "react";
import { HeartIcon, XIcon} from "@heroicons/react/solid";
import ReactPlayer from "react-player/lazy";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";

function Movie({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showPlayer, setShowPlayer] = useState(false);
  const dispatch = useDispatch();
  console.log({ result });

  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
  return (
    <div className="relative">
      <Head>
        <title>{result.title || result.original_name}</title>
      </Head>
      <Header />
      <Nav />
      <section className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            alt=""
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          <h1 className="text-3x1 sm:text-4xl md:text-5xl font-bold">
            {result.title || result.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              onClick={() => setShowPlayer(true)}
            >
              <img
                src="rotten_tomatoes\public\play-icon-white.svg"
                alt=""
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </button>

            <div className="rounded-full border-2 border-white flec items-center justify-center w-8 h-8 cursor-pointer bg-black/60">
              <button onClick={() => dispatch(addToCart(result))}>
                <HeartIcon className="w-5 h-5 m-auto mt-1" />
              </button>
            </div>
          </div>

          <p className="text-xs md:text-sm">
            {result.release_date || result.first_air_date} •{" "}
            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{" "}
            {result.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="text-sm md:text-lg max-w-4x1">{result.overview}</h4>
        </div>

        {showPlayer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold"> Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-78 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=fr-FR&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}

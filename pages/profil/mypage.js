import Header from "../../components/Header";
import { useSession } from "next-auth/react";

function mypage() {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      
      {session ? (
        <>
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-gray-900/60 p-3 border-t-4 border-green-400">
              
              <div class="image overflow-hidden">
                <img
                  src={session.user.image}
                  alt=""
                  className="h-auto w-auto mx-auto"
                />
              </div>

              <h1 className="text-white-900 font-bold text-xl leading-8 my-1">
                {session.user.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {session.user.email}
              </h3>
            </div>
          </div>
        </>
      ) : (
        <h1>Pas de connexion</h1>
      )}
    </div>
  );
}

export default mypage;

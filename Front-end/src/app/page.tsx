import { Card } from "@/components/card";
import { Suspense, useEffect, useState } from "react";

interface IData {

  id: string
  name: string,
  image: string,
  ki: string,
  race: string,
  gender: string,
  affiliation: string
}

export default function Home() {

  //   const [data, setData] = useState<IData[]>([]);
  //   const [erro, setErro] = useState<boolean>(false);
  //   const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados!");

  //   const [page, setpage] = useState<string>("")                   

  //   useEffect(() => {
  //     api.get(`/characters?page=${page}&limit=10`).then((res) => {
  //         setErro(false);
  //         setData(res.data.items);
  //     }).catch((error) =>{
  //         if(error){
  //             setErrorMessage("Página não encontrada!");
  //         }
  //         setErro(true);
  //     })

  // }, [page])

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage: "url('https://images.pluto.tv/channels/6675c7868768aa0008d7f1c7/featuredImage.jpg?auto=&q=70&fit=fill&fill=blur&ixlib=react-9.1.5')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex items-end h-full p-52 px-[450px]">
          <button className="bg-red-600 hover:bg-red-700 p-6 rounded-full w-52 font-semibold font-sans text-white text-[25px] cursor-pointer">CAPTURAR</button>
        </div>
      </div>

      <>
        <div className="flex justify-center items-center m-4 pt-12">
          <div className="bg-blue-600 rounded-4xl">
            <h1 className="text-white text-4xl font-extrabold font-sans p-6 shadow-yellow-300 ">CARTAS CONQUISTADAS</h1>
          </div>

          {/* {erro && <h5>{errorMessage}</h5>}

          <Suspense fallback={<div>Loading...</div>}>
            {data.map((item, i) => {
              return (
                <div key={i} className="w-64 m-8 rounded-2xl">
                  <Card imagem={item.image} nome={item.name} genero={item.gender} raca={item.race} ki={item.ki} afiliacao={item.affiliation}></Card>
                </div>
              )
            })}

          </Suspense> */}

          <div className="w-64 m-8 rounded-2xl">
            <Card imagem={item.image} nome="Pokemon" genero={item.gender} raca={item.race} ki={item.ki} afiliacao={item.affiliation}></Card>
          </div>


        </div>
      </>
    </>
  );
}

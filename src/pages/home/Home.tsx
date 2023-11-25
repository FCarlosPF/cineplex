import "./home.scss";
import clientes from "../../assets/img/clientes.png";
import transparencia from "../../assets/img/transparencia.png";
import innovacion from "../../assets/img/innovacion.png";
import corazon from "../../assets/img/corazon.png";
import proactividad from "../../assets/img/proactividad.png";
import equipo from "../../assets/img/equipo.png";
import { Card } from "../../components/card/Card";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center pb-10"> Misión y Visión</h1>
      <div className="card-containers flex justify-around">
        <Card
          img="https://www.grupoioe.es/wp-content/uploads/2019/01/110.Definir-la-mision-y-vision-de-una-empresa-1024x494.jpg"
          title="Misión"
          subtitle="Transformar un día común  en historias extraordinarias"
        />
        <Card
          img="https://i.pinimg.com/564x/d4/2b/19/d42b19d014de6942d9b6c9d5d129f88e.jpg"
          title="Visión"
          subtitle="Ser la primera opción de entretenimiento fuera del hogar en los mercados donde opera, con crecimiento rentable y brindando una experiencia ágil y memorable a sus clientes, a través de un equipo comprometido y desarrollado que impulsa las mejores prácticas de sostenibilidad e inclusión social"
        />
      </div>

      <div className="min-h-screen bg-gradient-to-r ">
        <h1 className="text-5xl font-bold text-center pb-10">Valores</h1>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                <img src={clientes} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50 w-100">
              <h1 className="font-bold text-xl pb-4 text-black">
                1. Centrados en el cliente{" "}
              </h1>
              <p className=" text-xl pb-4 text-black">
                Nos ponemos en los zapatos de los clientes para servirles mejor
                y dar lo mejor de nosotros para superar las expectativas de
                nuestros clientes.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                <img src={transparencia} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50 w-full">
              <h1 className="font-bold text-xl pb-4 text-black">
                2. Integros y transparentes
              </h1>
              <p className=" text-xl pb-4 text-black">
                Hacemos lo correcto aunque nadie nos esté viendo. Decimos lo que
                pensamos respetuosamente, aunque sea difícil.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10 ">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                {" "}
                <img src={innovacion} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50 w-full">
              <h1 className="font-bold text-xl pb-4 text-black">
                3. Naturalmente innovadores
              </h1>
              <p className=" text-xl pb-4 text-black">
                Somos creativos y buscamos nuevas formas de mejorar las cosas,
                también somos flexibles a los cambios.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                {" "}
                <img src={corazon} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl pb-4 text-black">
                4. Apasionados por nuestra gente{" "}
              </h1>
              <p className=" text-xl pb-4 text-black">
                Nos interesamos genuinamente por las personas y su desarrollo,
                también generamos un ambiente grato, de confianza e inclusión
                entre todos.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                {" "}
                <img src={proactividad} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl pb-4 text-black">
                5. Muy determinados{" "}
              </h1>
              <p className=" text-xl pb-4 text-black">
                Nos comprometimos y cumplimos los objetivos a pesar de las
                adversidades. También nos hacemos cargo y pedimos
                retroalimentación.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                {" "}
                <img src={equipo} alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl pb-4 text-black">6. Equipo </h1>
              <p className=" text-xl pb-4 text-black">
                Trabajamos en equipo a todo nivel para lograr resultados
                extraordinarios. Somos parte de un todo y nuestras acciones
                repercuten en los otros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

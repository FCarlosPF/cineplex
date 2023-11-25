interface Props {
    img: string;
    title: string;
    subtitle: string;
  }
  
  export const Card: React.FC<Props> = ({ img, title, subtitle }) => {
    return (
      <>
      
        <div className="da relative flex h-100 flex-row justify-end overflow-hidden my-10 mt" >
          <div className="absolute inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg flex flex-row">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={img}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-brown shadow-xl">
                {title}
              </h1>
              <h1 className="text-sm font-light font-semibold text-white shadow-xl  p-4">
                {subtitle}
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  
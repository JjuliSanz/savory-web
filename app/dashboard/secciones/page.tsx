const Secciones = () => {
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <div className="fixed inset-0 py-4 bg-negro bg-opacity-80 flex justify-center items-center ">
        <div className="w-[400px] h-full bg-blanco-oscuro p-6 rounded-xl relative text-marron-claro">
          <div className="animate-pulse h-full grid grid-rows-6 grid-flow-row gap-4">
            <div className="row-span-1 bg-marron rounded-xl"></div>
            <div className="row-span-1 bg-marron rounded-xl"></div>
            <div className="row-span-1 bg-marron rounded-xl"></div>
            <div className="row-span-1 bg-marron rounded-xl"></div>
            <div className="row-span-1 bg-marron rounded-xl"></div>
            <div className="row-span-1 w-1/2 h-1/2 bg-marron rounded-xl justify-self-center place-self-center"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Secciones;

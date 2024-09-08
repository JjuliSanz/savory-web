import CardSkeleton from "@/components/menu/CardSkeleton";

const LoadingMenuSkeleton = () => {
  return (
    <section className="pt-10 pb-4 min-h-screen relative bg-[url('/bg.webp')] bg-fixed bg-cover">
      <div className="absolute inset-0 bg-marron opacity-80 z-10"></div>
      <nav className="w-fit max-w-3xl mx-auto flex justify-center p-4 bg-marron rounded animate-pulse">
        <ul className="w-[700px] h-[100px] flex flex-wrap justify-center gap-4">
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
        </ul>
      </nav>
      

      <div className="p-8 grid grid-cols-1 600:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-20 relative">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  );
};

export default LoadingMenuSkeleton;

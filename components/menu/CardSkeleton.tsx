const CardSkeleton = () => {
  return (
    <div className="bg-marron rounded-lg flex flex-col animate-pulse">
      <div className="relative w-full min-h-60 max-h-60 bg-blanco-oscuro rounded-t-lg"></div>
      <div className="w-full flex flex-col grow justify-between gap-4 p-4 min-h-[150px]">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-[80%] bg-blanco-oscuro"></div>
          <div className="h-10 w-full bg-blanco-oscuro"></div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="w-20 h-6 bg-blanco-oscuro"></div>
          <div className="w-20 h-6 bg-blanco-oscuro"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;

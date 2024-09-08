"use client";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchBarMenu = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isTyping, setIsTyping] = useState(false);

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    setIsTyping(searchTerm.trim() !== ""); // Chek if the input value is not empty after triming
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);
  return (
    <div className="relative flex w-[400px] z-10 mt-10 mx-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full bg-marron text-2xl font-medium text-blanco-oscuro placeholder-blanco-oscuro border-2 border-blanco-oscuro rounded-xl pl-10 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:bg-blanco-oscuro focus:text-marron focus:placeholder-marron"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <SearchIcon className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 text-blanco-oscuro peer-focus:text-marron" />
    </div>
  );
};

export default SearchBarMenu;

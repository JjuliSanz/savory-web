// hooks/useCategory.ts
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "promociones";

  useEffect(() => {
    if (!searchParams.get("category")) {
      router.replace(`/dashboard?category=promociones`);
    }
  }, [router, searchParams]);

  const handleCategoryChange = (category: string) => {
    router.push(`/dashboard?category=${category}`);
  };

  return { selectedCategory, handleCategoryChange };
};

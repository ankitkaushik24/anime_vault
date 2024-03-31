"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeList from "./AnimeList";
import { fetchAnime } from "@/app/actions";
import { AnimeProp } from "./AnimeCard";

function LoadMore({ page }: { page: number }) {
  const { ref, inView } = useInView();

  const [currentPage, setCurrentPage] = useState<number>(page);
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(currentPage).then((fetchedData) => {
        setCurrentPage((p) => p + 1);
        setData((d) => [...d, ...fetchedData]);
      });
    }
  }, [currentPage, inView]);

  return (
    <>
      <AnimeList data={data} />
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;

import AnimeCard, { AnimeProp } from "./AnimeCard";

type AnimeListPropType = { data: AnimeProp[] };
const AnimeList = ({ data }: AnimeListPropType) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={item.idx} />
      ))}
    </section>
  );
};

export default AnimeList;

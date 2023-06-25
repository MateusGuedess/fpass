import { useState } from "react";
import { useQuery } from "react-query";
import { fetchHeroes } from "../../api";
import Card from "../../components/Card";
import { Container } from "./style";

interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function Search() {
  const [name, setName] = useState("");
  const { data, error, isLoading } = useQuery("heroes", () =>
    fetchHeroes(name)
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  console.log(data);
  return (
    <Container>
      {data?.data?.results.map((hero: Hero) => (
        <Card
          key={hero.id}
          id={hero.id}
          name={hero.name}
          srcImage={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        />
      ))}
    </Container>
  );
}

export default Search;

import { useState } from "react";
import { useQuery } from "react-query";
import { fetchHeroes } from "../../api";

function Search() {
  const [name, setName] = useState("");
  const { data, error, isLoading } = useQuery("heroes", () =>
    fetchHeroes(name)
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  console.log(data);
  return (
    <div>
      {data?.data?.results.map((item: { name: string }, index: number) => (
        <p key={index}>{item?.name}</p>
      ))}
    </div>
  );
}

export default Search;

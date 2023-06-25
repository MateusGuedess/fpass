const fetchHeroes = (name: string) =>
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fe2d66236067eb239b99337c5275a446&hash=51902dbbac548453f4f28d8387b43a73&${
      name ? `name=${name}` : ""
    }`
  ).then((res) => res.json());

export { fetchHeroes };

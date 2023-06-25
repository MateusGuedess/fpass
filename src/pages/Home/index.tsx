import { Container } from "./style";

function Home() {
  return (
    <Container>
      <div className="home__description">
        <p className="home__title">Heroes Search</p>
        <p className="home__text">
          Afim de ter todas informações sobre seu herói favorito? Buscando saber
          cada perfeição e imperfeição do seu herói favorito? Aqui você pode!
          com o Heros Search você tem tudo o que precisa pra ter na palma da sua
          mão ou na tela do seu computador toda ficha do seu herói. Comece sua
          Busca Já!
        </p>
        <button className="home__searchButton">Buscar</button>
      </div>
    </Container>
  );
}

export default Home;

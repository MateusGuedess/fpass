import { Container } from "./style";

function Header() {
  return (
    <Container>
      <p className="logo">MARVEL</p>
      <a href="/">Home</a>
      <a href="/search">Search</a>
    </Container>
  );
}

export default Header;

import { Nav, Link, Header, Container, Wrap } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Wrap>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </Nav>
        </Wrap>
      </Container>
    </Header>
  );
};

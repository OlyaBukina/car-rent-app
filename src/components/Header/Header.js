import { StyledNavContainer, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledNavContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="catalog">Catalog</StyledNavLink>
      <StyledNavLink to="favorites">Favorites</StyledNavLink>
    </StyledNavContainer>
  );
};

export default Header;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  color: var(--accent-color);
  border-radius: 12px;
  width: 130px;
  padding: 8px 0;
  display: flex;
  justify-content: center;

  &:hover {
    color: var(--hover-color);
  }
  &.active {
    color: var(--active-link--color);
    background-color: var(--active-link-bg-color);
  }
`;

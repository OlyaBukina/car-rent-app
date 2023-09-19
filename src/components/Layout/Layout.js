import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;

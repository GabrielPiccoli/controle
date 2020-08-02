import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--blackLighter);
  color: var(--white);
  flex: 1;
  padding-top: 20px;
  padding-right: 5%;
  padding-left: 5%;
  h1 {
    font-size: 2em;
  }
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
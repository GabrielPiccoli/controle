import styled from 'styled-components';

export const FooterBase = styled.footer`
  display: flex;
  justify-content: space-between;
  background: var(--black);
  opacity: 0.9;
  border-top: 2px solid var(--primary);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  .icones-sociais {
    width: 40px;
    margin-right: 10px;
  }
`;

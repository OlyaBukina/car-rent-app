import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 29px;
`;

export const LoadMoreBtn = styled.button`
  width: fit-content;
  margin: 0 auto;
  margin-top: 100px;
  font-family: var(--main-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--accent-color);
  text-decoration-line: underline;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }
`;

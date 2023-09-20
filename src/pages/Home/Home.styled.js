import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 255, 0.5),
      rgba(255, 255, 0, 0.5)
    ),
    url(https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695207414/1654130272_6-celes-club-p-oboi-na-rabochii-stol-doroga-krasivie-6_mqh1mk.jpg);
  background-size: cover;
`;

export const Title = styled.h1`
  margin-top: 150px;
  padding-left: 50px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.7;
  width: 520px;
  color: var(--white-color);
`;

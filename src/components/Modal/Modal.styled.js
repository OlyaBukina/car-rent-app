import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  overflow: hidden;
`;

export const AdvertWrapper = styled.div`
  position: relative;
  overflow: auto;
  padding: 40px;
  max-width: 541px;
  max-height: calc(100% - 40px);
  background-color: var(--white-color);
  border-radius: 24px;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  stroke: var(--main-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.div`
  overflow: auto;
`;

export const AdvertImage = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const MainInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: var(--accent-color);
`;

export const InfoItem = styled.p`
  padding: 0 6px;
  border-right: 1px solid #1214171a;

  &:last-child {
    border-right: none;
  }
`;
export const SecondaryInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 283px;
  margin-left: -6px;
  margin-bottom: 28px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--secondary-text-color);
  margin-bottom: 17px;
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const ExtraInfo = styled.div`
  margin-bottom: 24px;
`;

export const ExtraInfoContant = styled(SecondaryInfoWrapper)`
  width: 100%;
`;

export const Titles = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const RentalCarBtn = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--white-color);
  background-color: var(--accent-color);
  border-radius: 12px;
  &:hover {
    background-color: var(--hover-color);
  }
`;

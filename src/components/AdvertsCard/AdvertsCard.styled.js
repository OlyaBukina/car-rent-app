import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MainInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Model = styled.span`
  color: var(--accent-color);
`;

export const RentalPrice = styled.p`
  margin-right: 9px;
`;
export const InfoItem = styled.p`
  font-size: 12px;
  line-height: 18px;
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
  margin-bottom: 28px;
  margin-left: -6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--secondary-text-color);
`;

export const LearnMoreBtn = styled.button`
  font-family: var(--main-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--white-color);
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
`;

export const HeartIcon = styled.svg`
  fill: none;
  stroke: var(--white-color);
`;

export const AddToFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;
  ${({ $isFavorite }) =>
    $isFavorite &&
    css`
      ${HeartIcon} {
        fill: var(--accent-color);
        stroke: var(--accent-color);
      }
    `};
`;

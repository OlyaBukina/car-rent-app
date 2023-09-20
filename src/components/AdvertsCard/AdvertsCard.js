import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardImage,
  MainInfoWrapper,
  SecondaryInfoWrapper,
  MainInfo,
  Model,
  RentalPrice,
  LearnMoreBtn,
  AddToFavoriteBtn,
  InfoItem,
  HeartIcon,
} from './AdvertsCard.styled';
import icons from '../../images/icons.svg';
import Modal from '../Modal/Modal';
import noImage from '../../images/no-image.jpg';

const AdvertsCard = ({ advertInfo, isFavorite, toggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
    id,
  } = advertInfo;
  const [city, country] = useMemo(
    () => address.split(', ').splice(1, 2),
    [address]
  );

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      {showModal && <Modal onClose={toggleModal} advertInfo={advertInfo} />}
      <CardWrapper>
        <CardImage src={img ? img : noImage} alt={description} />
        <MainInfoWrapper>
          <MainInfo>
            {make} <Model>{model}</Model>, {year}
          </MainInfo>
          <RentalPrice>{`$` + rentalPrice}</RentalPrice>
        </MainInfoWrapper>
        <SecondaryInfoWrapper>
          <InfoItem>{city}</InfoItem>
          <InfoItem>{country}</InfoItem>
          <InfoItem>{rentalCompany}</InfoItem>
          <InfoItem>{type}</InfoItem>
          <InfoItem>{id}</InfoItem>
          <InfoItem>{accessories[0]}</InfoItem>
        </SecondaryInfoWrapper>
        <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>

        <AddToFavoriteBtn onClick={toggleFavorite} $isFavorite={isFavorite}>
          <HeartIcon width="18" height="18">
            <use href={icons + '#icon-heart'}></use>
          </HeartIcon>
        </AddToFavoriteBtn>
      </CardWrapper>
    </>
  );
};
export default AdvertsCard;

AdvertsCard.propTypes = {
  advertInfo: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Overlay,
  AdvertWrapper,
  CloseModalBtn,
  ScrollContainer,
  CloseIcon,
  AdvertImage,
  MainInfo,
  Model,
  SecondaryInfoWrapper,
  InfoItem,
  Description,
  ExtraInfo,
  Titles,
  ExtraInfoContant,
  RentalCarBtn,
} from './Modal.styled';
import icons from '../../images/icons.svg';
import noImage from '../../images/no-image.jpg';
import RentalConditions from './RentalConditions/RentalConditions';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, advertInfo }) => {
  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    fuelConsumption,
    id,
    engineSize,
    functionalities,
    rentalConditions,
    mileage,
  } = advertInfo;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const [city, country] = useMemo(
    () => address.split(', ').splice(1, 2),
    [address]
  );

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <AdvertWrapper>
        <CloseModalBtn onClick={() => onClose()}>
          <CloseIcon width="24" height="24">
            <use href={icons + '#icon-close'}></use>
          </CloseIcon>
        </CloseModalBtn>

        <ScrollContainer>
          <AdvertImage src={img ? img : noImage} alt={description} />
          <MainInfo>
            {make} <Model>{model}</Model>, {year}
          </MainInfo>
          <SecondaryInfoWrapper>
            <InfoItem>{city}</InfoItem>
            <InfoItem>{country}</InfoItem>
            <InfoItem>Id: {id}</InfoItem>
            <InfoItem>Year: {year}</InfoItem>
            <InfoItem>Type: {type}</InfoItem>
            <InfoItem>Fuel Consumption: {fuelConsumption}</InfoItem>
            <InfoItem>Engine: {engineSize}</InfoItem>
          </SecondaryInfoWrapper>

          <Description>{description}</Description>

          <ExtraInfo>
            <Titles>Accessories and functionalities:</Titles>
            <ExtraInfoContant>
              {accessories.map(item => (
                <InfoItem key={item}>{item}</InfoItem>
              ))}
              {functionalities.map(item => (
                <InfoItem key={item}>{item}</InfoItem>
              ))}
            </ExtraInfoContant>
          </ExtraInfo>
          <ExtraInfo>
            <Titles>Rental Conditions: </Titles>
            <RentalConditions
              rentalConditions={rentalConditions}
              mileage={mileage}
              rentalPrice={rentalPrice}
            />
          </ExtraInfo>
          <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
        </ScrollContainer>
      </AdvertWrapper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  advertInfo: PropTypes.object.isRequired,
};

import { useMemo } from 'react';
import PropTypes from 'prop-types';

const {
  RentalContainer,
  RentalItem,
  RentalItemNumber,
} = require('./RentalConditions.styled');

const RentalConditions = ({ rentalConditions, mileage, rentalPrice }) => {
  const [minAge, validLicense, securityDeposit] = useMemo(
    () => rentalConditions.split('\n'),
    [rentalConditions]
  );

  return (
    <RentalContainer>
      <RentalItem>
        Minimum age:{' '}
        <RentalItemNumber>{minAge.split(':').splice(1, 2)}</RentalItemNumber>
      </RentalItem>
      <RentalItem>{validLicense}</RentalItem>
      <RentalItem>{securityDeposit}</RentalItem>
      <RentalItem>
        Mileage:{' '}
        <RentalItemNumber>{mileage.toLocaleString('en-IN')}</RentalItemNumber>
      </RentalItem>
      <RentalItem>
        Price: <RentalItemNumber>{rentalPrice}$</RentalItemNumber>
      </RentalItem>
    </RentalContainer>
  );
};
export default RentalConditions;

RentalConditions.propTypes = {
  rentalConditions: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  rentalPrice: PropTypes.number.isRequired,
};

import { useMemo } from 'react';

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

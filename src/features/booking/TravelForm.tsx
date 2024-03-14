import React, { useReducer } from 'react';
import DropDownSelect from '../../components/DropDownSelect';
import { CiLocationOn } from 'react-icons/ci';
import CustomDatePicker from '../../components/CustomDatepicker';
import Button from '../../components/Button';

const sampleLocation = [
  { id: 101, value: 'Nairobi' },
  { id: 102, value: 'Nakuru' },
];

type State = {
  departureDate: Date | null;
  departure: number | null;
  destination: number | null;
};

type Action =
  | { type: 'setDepartureDate'; payload: Date | null }
  | { type: 'setDeparture'; payload: number | null }
  | { type: 'setDestination'; payload: number | null };

const initialState = {
  departureDate: null,
  departure: null,
  destination: null,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setDepartureDate':
      return { ...state, departureDate: action.payload };
    case 'setDeparture':
      return { ...state, departure: action.payload };
    case 'setDestination':
      return { ...state, destination: action.payload };
    default:
      throw new Error();
  }
}

export default function TravelForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    console.log(state);
  };

  return (
    <div className="flex flex-row gap-20 bg-white p-4 shadow-md">
      <div>
        <DropDownSelect
          handleSelect={(id) => dispatch({ type: 'setDeparture', payload: id })}
          data={sampleLocation}
          Icon={CiLocationOn}
          text="Traveling From"
        />
      </div>

      <div>
        <DropDownSelect
          handleSelect={(id) => dispatch({ type: 'setDestination', payload: id })}
          data={sampleLocation}
          Icon={CiLocationOn}
          text="Destination"
        />
      </div>

      <div>
        <CustomDatePicker
          selectedDate={state.departureDate}
          handleDateChange={(date) => dispatch({ type: 'setDepartureDate', payload: date })}
          text="Departure Date"
        />
      </div>

      <div className="flex items-center">
        <Button type="primary" onClick={handleClick}>
          Find Bus
        </Button>
      </div>
    </div>
  );
}

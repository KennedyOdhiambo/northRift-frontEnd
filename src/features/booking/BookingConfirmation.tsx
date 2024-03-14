import { FaCalendar, FaClock, FaRoute } from 'react-icons/fa6';
import TransitInfoCard from '../shuttles/TransitInfoCard';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

export default function BookingConfirmation() {
  return (
    <div className="flex flex-col gap-5 p-3 border border-gray-200 rounded-lg">
      <div className="flex flex-row gap-3 items-center">
        <TransitInfoCard title="Route:" details="Nairobi to Eldoret" icon={<FaRoute />} />
        <TransitInfoCard title="Date:" details="01/01/2023" icon={<FaCalendar />} />
        <TransitInfoCard title="Departure:" details="11:45 AM" icon={<FaClock />} />
      </div>

      <p className="text-base font-semibold">
        selected Seat : <span>5</span>
      </p>

      <div className="flex flex-col gap-3">
        <InputField label={'Passenger Name'} type={'text'} id={'passengerName'} />
        <InputField label="Phone Number" type="tel" id="phoneNumber" />
      </div>

      <Button type="primary">Proceed to Payment </Button>
    </div>
  );
}

import { Dispatch, SetStateAction } from 'react';
import { FaBus, FaRoute, FaCalendar, FaClock, FaCouch, FaTicketAlt } from 'react-icons/fa';
import TransitInfoCard from './TransitInfoCard';
import Button from '../../components/Button';

type AvailableShuttlesProps = {
  setBookingModal: Dispatch<SetStateAction<boolean>>;
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  price: string;
};

export default function AvailableShuttles({
  setBookingModal,
  from,
  to,
  date,
  time,
  seats,
  price,
}: AvailableShuttlesProps) {
  return (
    <div className="flex flex-col items-end gap-4 border shadow-md rounded-3xl border-gray-100 px-6 py-8 bg-white">
      <div className="flex flex-row gap-16 w-full justify-center">
        <TransitInfoCard title="Route:" details={`${from} to ${to}`} icon={<FaRoute />} />
        <TransitInfoCard title="Bus Number:" details="KYC 2023" icon={<FaBus />} />
        <TransitInfoCard title="Date:" details={date} icon={<FaCalendar />} />
        <TransitInfoCard title="Departure:" details={time} icon={<FaClock />} />
        <TransitInfoCard title="Availability:" details={`${seats} Seats available`} icon={<FaCouch />} />
        <TransitInfoCard title="Ticket Price:" details={price} icon={<FaTicketAlt />} />
      </div>

      <Button type="primary" className="w-fit" onClick={() => setBookingModal(true)}>
        Book Seat
      </Button>
    </div>
  );
}

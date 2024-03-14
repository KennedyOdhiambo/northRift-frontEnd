import React, { Dispatch, SetStateAction } from 'react';
import { FaBus, FaRoute, FaCalendar, FaClock, FaCouch, FaTicketAlt } from 'react-icons/fa';
import TransitInfoCard from './TransitInfoCard';
import Button from '@/app/components/Button';

type AvailableShuttlesProps = {
  setBookingModal: Dispatch<SetStateAction<boolean>>;
};

export default function AvailableShuttles({ setBookingModal }: AvailableShuttlesProps) {
  return (
    <div className="flex flex-col items-end gap-4 border shadow-md rounded-3xl border-gray-100 px-6 py-8 bg-white">
      <div className="flex flex-row gap-16 w-full justify-center">
        <TransitInfoCard title="Route:" details="Nairobi to Eldoret" icon={<FaRoute />} />
        <TransitInfoCard title="Bus Number:" details="KYC 2023" icon={<FaBus />} />
        <TransitInfoCard title="Date:" details="01/01/2023" icon={<FaCalendar />} />
        <TransitInfoCard title="Departure:" details="11:45 AM" icon={<FaClock />} />
        <TransitInfoCard title="Availability:" details="12 Seats available" icon={<FaCouch />} />
        <TransitInfoCard title="Ticket Price:" details="Ksh 5000" icon={<FaTicketAlt />} />
      </div>

      <Button type="primary" className="w-fit" onClick={() => setBookingModal(true)}>
        Book Seat
      </Button>
    </div>
  );
}

import React, { Dispatch, SetStateAction } from 'react';
import AvailableShuttles from './AvailableShuttles';

type ShuttlesCardProps = {
  setBookingModal: Dispatch<SetStateAction<boolean>>;
};

export default function Shuttlescard({ setBookingModal }: ShuttlesCardProps) {
  return (
    <div className="flex w-full items-center flex-col gap-8 py-5">
      <AvailableShuttles setBookingModal={setBookingModal} />
      <AvailableShuttles setBookingModal={setBookingModal} />
      <AvailableShuttles setBookingModal={setBookingModal} />
      <AvailableShuttles setBookingModal={setBookingModal} />
    </div>
  );
}

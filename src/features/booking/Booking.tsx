import BusSeatComponent from '../shuttles/BusSeatComponent';
import { FaRegWindowClose } from 'react-icons/fa';
import BookingConfirmation from './BookingConfirmation';

const sampleSeatData = [
  { id: 1, status: 'available' },
  { id: 2, status: 'booked' },
  { id: 3, status: 'available' },
  { id: 4, status: 'selected' },
  { id: 5, status: 'available' },
  { id: 6, status: 'booked' },
  { id: 7, status: 'available' },
  { id: 8, status: 'booked' },
  { id: 9, status: 'available' },
  { id: 10, status: 'booked' },
  { id: 11, status: 'available' },
  { id: 12, status: 'booked' },
  { id: 13, status: 'available' },
  { id: 14, status: 'booked' },
];

type BookingProps = {
  onModalClose: () => void;
};

export default function Booking({ onModalClose }: BookingProps) {
  return (
    <div className="fixed right-0 h-screen w-[420px] bg-white p-5">
      <div className="flex flex-col gap-5">
        <div className="w-full flex justify-end border-b-2 pb-3">
          <FaRegWindowClose className=" text-2xl cursor-pointer" title="close" onClick={() => onModalClose()} />
        </div>

        <div className="flex flex-col gap-20">
          <BusSeatComponent seatData={sampleSeatData} />
          <BookingConfirmation />
        </div>
      </div>
    </div>
  );
}

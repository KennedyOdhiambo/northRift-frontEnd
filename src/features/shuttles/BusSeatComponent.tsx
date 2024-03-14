'use client';

import React, { useState } from 'react';
import Seat from './Seat';

export default function BusSeatComponent({ seatData }: { seatData: Array<{ id: number; status: string }> }) {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatClick = (seatId: number) => {
    if (seatData.find((seat) => seat.id === seatId)?.status === 'available') {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  console.log(selectedSeats);
  return (
    <div className="gap-20 flex flex-row p-4">
      <div>
        {/* Front Row */}
        <div className="flex gap-4">
          {seatData.slice(0, 2).map((seat) => (
            <Seat key={seat.id} id={seat.id} status={seat.status} onSeatClick={handleSeatClick} />
          ))}
        </div>
        {/* Other Rows */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {seatData.slice(2).map((seat) => (
            <Seat key={seat.id} id={seat.id} status={seat.status} onSeatClick={handleSeatClick} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 text-xs">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-green-500"></div>
          <span>Available</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-blue-500"></div>
          <span>Slected</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-3 bg-gray-500"></div>
          <span>Taken</span>
        </div>
      </div>
    </div>
  );
}

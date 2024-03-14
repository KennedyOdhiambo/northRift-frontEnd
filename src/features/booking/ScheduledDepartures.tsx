import { FaInfo } from 'react-icons/fa6';

export default function ScheduledDepartures() {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-5">
          Scheduled <span className="text-red-400">Departures</span>
        </h1>
        <p className="text-xs flex flex-row justify-center bg-slate-100 p-5 ">
          <FaInfo />
          Please specify the travel route and date above to view all scheduled departures and book your ticket
        </p>
      </div>
    </div>
  );
}

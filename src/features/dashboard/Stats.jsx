import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable */
function Stats({
  bookings = [],
  confirmedStays = [],
  numDays = 7,
  cabinCount = 1,
}) {
  // 1. Total number of bookings
  const numBookings = bookings.length;

  // 2. Total sales amount
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Number of confirmed stays (check-ins/outs)
  const checkins = confirmedStays.length;

  // 4. Occupancy Rate = (Total nights stayed) / (Total available nights)
  const totalNights = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const totalAvailableNights = numDays * cabinCount;
  const occupation = totalAvailableNights
    ? Math.min(100, Math.round((totalNights / totalAvailableNights) * 100))
    : 0;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${occupation}%`}
      />
    </>
  );
}

export default Stats;

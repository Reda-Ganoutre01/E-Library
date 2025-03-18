import StatsCard from "../../components/admin/card/StatsCard";
import PageNavigator from "../../components/navigation/PageNavigator";
import { FaUser, FaBook, FaRecordVinyl } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminHomePage() {
  return (
    <section className="container flex flex-col px-12 mt-12">
      <PageNavigator title={"Admin"} path={-1} />
      <section className="grid grid-cols-3 gap-1 font-[poppins] mt-4">
        <Link to={"users"}>
          <StatsCard icon={<FaUser className="size-6" />} title={"Users"} />
        </Link>
        <Link to={"books"}>
          <StatsCard icon={<FaBook className="size-6" />} title={"Books"} />
        </Link>
        <Link to={"borrowRecords"}>
          <StatsCard
            icon={<FaRecordVinyl className="size-6" />}
            title={"Borrow Records"}
          />
        </Link>
      </section>
    </section>
  );
}

import { CubeIcon, CurrencyDollarIcon, FlagIcon } from "@heroicons/react/16/solid";
import Stat from "../../ui/Stat";


function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-3">
      <Stat
        title={"پروژه‌ها"}
        value={numOfProjects}
        icon={<CubeIcon className="size-20" />}
        color="primary"
      />
      <Stat
        title={"پروژه‌های واگذار شده"}
        value={numOfAcceptedProjects}
        icon={<CurrencyDollarIcon className="size-20" />}
        color="green"
      />
      <Stat
        title={"درخواست‌ها"}
        value={numOfProposals}
        icon={<FlagIcon className="size-20" />}
        color="red"
      />
    </div>
  );
}

export default Stats;

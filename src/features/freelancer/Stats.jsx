import {
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  FlagIcon,
} from "@heroicons/react/16/solid";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce(
    (acc, curr) => curr.price + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
      <Stat
        title={"درخواست‌ها"}
        value={numOfProposals}
        icon={<FlagIcon className="size-20" />}
        color="primary"
      />
      <Stat
        title={"درخواست‌های قبول شده"}
        value={acceptedProposals.length}
        icon={<ClipboardDocumentCheckIcon className="size-20" />}
        color="green"
      />
      <Stat
        title={"کیف پول"}
        value={toPersianNumbersWithComma(balance)}
        icon={<CurrencyDollarIcon className="size-20" />}
        color="red"
      />
    </div>
  );
}

export default Stats;

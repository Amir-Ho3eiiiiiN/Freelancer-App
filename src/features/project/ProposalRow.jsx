import { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { truncateText } from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { EyeIcon } from "@heroicons/react/16/solid";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  { lable: "رد شده", className: "badge--danger" },
  { lable: "در انتظار تایید", className: "badge--secondary" },
  { lable: "تایید شده", className: "badge--success" },
];

function ProposalRow({ proposal, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].lable}
        </span>
      </td>
      <td className="text-center">
        <EyeIcon
          className="cursor-pointer size-6 text-primary-900"
          onClick={() => setOpen(true)}
        />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"تغییر وضعیت درخواست"}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;

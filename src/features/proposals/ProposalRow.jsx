import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { truncateText } from "../../utils/truncateText";

const statusStyle = [
  { lable: "رد شده", className: "badge--danger" },
  { lable: "در انتظار تایید", className: "badge--secondary" },
  { lable: "تایید شده", className: "badge--success" },
];

function ProposalRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{truncateText(proposal.description, 30)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`${statusStyle[proposal.status].className} badge`}>
          {statusStyle[proposal.status].lable}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;

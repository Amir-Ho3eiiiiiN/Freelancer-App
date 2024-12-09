import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName={"درخواستی"} />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>(روز) زمان تحویل</th>
        <th>مبلغ پیشنهادی</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((item, index) => (
          <ProposalRow key={item._id} proposal={item} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;

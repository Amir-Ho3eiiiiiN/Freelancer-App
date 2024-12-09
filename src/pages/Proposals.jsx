import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="mb-8 text-xl font-black text-secondary-700">
        لیست پروپوزال‌ها
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;

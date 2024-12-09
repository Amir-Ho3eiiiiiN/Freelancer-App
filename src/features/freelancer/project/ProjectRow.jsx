import { Square2StackIcon } from "@heroicons/react/16/solid";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import { truncateText } from "../../../utils/truncateText";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposalForm from "../../proposals/CreateProposalForm";

const projectStatus = {
  OPEN: { lable: "باز", className: "badge--success" },
  ClOSE: { lable: "بسته", className: "badge--danger" },
};

function ProjectRow({ project, index }) {
  const { status } = project;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].lable}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <Square2StackIcon className="size-5 text-primary-900" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${project.title}`}
        >
          <CreateProposalForm
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;

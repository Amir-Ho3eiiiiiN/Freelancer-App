import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { truncateText } from "../../utils/truncateText";
import Table from "../../ui/Table";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import ToggleStatusProject from "./ToggleStatusProject";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{index}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleStatusProject project={project} />
      </td>
      <td>
        <div className="flex items-center gap-2">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <PencilIcon className="size-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <TrashIcon className="size-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onCarfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => {
                      setIsDeleteOpen(false);
                    },
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={`${project._id}`} className="flex justify-center ">
          <EyeIcon className="size-6 text-primary-900" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
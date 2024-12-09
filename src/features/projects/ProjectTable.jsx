import { useState } from "react";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import CreateProjectForm from "./CreateProjectForm";
import useOwnerProject from "./useOwnerProject";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();
  const [isAddOpen, setIsAddOpen] = useState(false);
  if (isLoading) return <Loading />;
  if (!projects.length === 0) return <Empty resourceName="پروژه" />;
  return (
    <>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-secondary-700">
          لیست پروژه‌ها
        </h2>
        <>
          <button
            className="btn btn--primary"
            onClick={() => setIsAddOpen(true)}
          >
            اضافه کردن پروژه
          </button>
          <Modal
            title="افزودن پروژه"
            open={isAddOpen}
            onClose={() => setIsAddOpen(false)}
          >
            <CreateProjectForm onClose={() => setIsAddOpen(false)} />
          </Modal>
        </>
      </div>
      <Table>
        <Table.Header>
          <th>##</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه </th>
          <th>ددلاین</th>
          <th>تگ‌ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th>درخواست‌ها</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} index={index} project={project} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default ProjectTable;

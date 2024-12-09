import useProject from "../../../hooks/useProject";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useProject();
  if (isLoading) return <Loading />;
  if (!projects.length === 0) return <Empty resourceName="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} index={index} project={project}/>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;

import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { truncateText } from "../../utils/truncateText";
import useProject from "./useProject";

function ProjectTableV1() {
  const { isLoading, projects } = useProject();
  if (isLoading) return <Loading />;
  if (!projects.length === 0) return <Empty resourceName="پروژه" />;
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه </th>
            <th>ددلاین</th>
            <th>تگ‌ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td>{index}</td>
              <td>{truncateText(project.title,30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => <span key={tag} className="badge badge--secondary">{tag}</span> )}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTableV1;

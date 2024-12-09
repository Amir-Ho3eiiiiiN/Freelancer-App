import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}

export default Project;

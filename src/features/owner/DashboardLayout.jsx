import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useOwnerProject from "../projects/useOwnerProject";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProject();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;

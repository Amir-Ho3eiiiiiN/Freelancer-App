import { HomeIcon, PaperClipIcon } from "@heroicons/react/16/solid";
import AppLayout from "../../pages/AppLayout";
import { CustomNavlink } from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="/owner/dashboard">
          <HomeIcon className="size-4" />
          <span> خانه</span>
        </CustomNavlink>

        <CustomNavlink to="/owner/projects">
          <PaperClipIcon className="size-4" />
          <span>پروژه</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLayout;

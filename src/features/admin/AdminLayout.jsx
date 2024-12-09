import {
  ClipboardDocumentListIcon,
  HomeIcon,
  PaperClipIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import AppLayout from "../../pages/AppLayout";
import { CustomNavlink } from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HomeIcon className="size-4" />
          <span> خانه</span>
        </CustomNavlink>
        <CustomNavlink to="users">
          <UsersIcon className="size-4" />
          <span>کاربران</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <PaperClipIcon className="size-4" />
          <span>پروژه‌ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <ClipboardDocumentListIcon className="size-4" />
          <span>درخواست‌ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default AdminLayout;

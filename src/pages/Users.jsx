import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="mb-8 text-xl font-black text-secondary-700">
       کاربران
      </h1>
      <UsersTable />
    </div>
  );
}

export default Users
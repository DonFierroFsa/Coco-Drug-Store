import ResetPasswordForm from "../../components/dbComponents/allUsers/ResetPasswordForm";
import TableUsers from "../../components/dbComponents/allUsers/TableUsers";
import UserForm from "../../components/dbComponents/allUsers/UserForm";

export default function UserList() {
  return (
    <section
      id="users"
      className="flex w-full flex-col items-center justify-center gap-10"
    >
      <h3 className="my-10 text-4xl font-bold">USUARIOS</h3>
      <aside className="mb-10 flex w-full items-start justify-evenly">
        <UserForm />
        <ResetPasswordForm />
      </aside>

      <TableUsers />
    </section>
  );
}

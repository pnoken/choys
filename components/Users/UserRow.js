import { Fragment, useState } from "react";
import TableDropdown from "../Dropdowns/TableDropDown";
import ConfirmDelete from "../Modal/DeleteModal";
import EditProfile from "../Modal/EditModal";

export default function UserRow({ user, color, editUser }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <Fragment>
      {open && (
        <ConfirmDelete open={open} setOpen={setOpen} id={user.id} user={user} />
      )}
      {edit && (
        <EditProfile
          edit={edit}
          setEdit={setEdit}
          user={user}
          onEditUser={editUser}
        />
      )}
      <tbody>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            {/* <img
              src="/img/bootstrap.jpg"
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            ></img>{" "} */}
            <div className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-12 w-12 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-blueGray-600" : "text-white")
              }
            >
              {user.displayName}
            </span>
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {user.role || "none"}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
            {user.emailVerified ? "verified" : "pending"}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-blueGray-600" : "text-white")
              }
            >
              {user.email}
            </span>
          </td>

          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
            <TableDropdown setOpen={setOpen} setEdit={setEdit} />
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
}

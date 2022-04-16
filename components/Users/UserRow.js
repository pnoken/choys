import { Fragment, useState } from "react";
import TableDropdown from "../Dropdowns/TableDropDown";
import ConfirmDelete from "../Modal/DeleteModal";
// import EditProfile from "../Modal/EditModal";

export default function UserRow({ user, color }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {open && <ConfirmDelete open={open} setOpen={setOpen} id={user.id} />}
      {/* {open && <EditProfile open={open} setOpen={setOpen} />} */}
      <tbody>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            <img
              src="/img/bootstrap.jpg"
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            ></img>{" "}
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
            {user.role}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <i className="fas fa-circle text-orange-500 mr-2"></i> pending
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
            <TableDropdown setOpen={setOpen} />
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
}

import { getUsers } from "@/utils/serverActions";
import Image from "next/image";
import React from "react";
import DeleteUserButton from "./DeleteUserButton";

const UsersList = ({ query }: { query: string }) => {
  const usersList = getUsers();
  console.log(usersList);

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredUsers = Array.isArray(usersList)
    ? usersList.filter((user) => {
        return normalizeString(user.title)
          .toLowerCase()
          .includes(normalizeString(query).toLowerCase());
      })
    : [];
  return (
    <>
      <div>
        {Array.isArray(usersList) && usersList.length === 0 && (
          <p>No se encontraron produyctos </p>
        )}
      </div>
      {Array.isArray(usersList) &&
        filteredUsers.map((user) => (
          <div
            key={user.email}
            className="w-full grid grid-cols-6 gap-2 px-6 py-4 border-b border-marron-clarito text-marron"
          >
            <div className="col-span-1 ">
              <Image
                src={user.imageSrc}
                alt={user.name}
                width={100}
                height={50}
                className="rounded-sm object-cover w-[100px]"
              />
            </div>
            <div className="col-span-1 text-xl font-semibold">{user.name}</div>
            <div className="col-span-2 text-lg font-medium">{user.email}</div>
            <div className="col-span-1 text-lg font-semibold">{user.role}</div>
            <div className="col-span-1 flex flex-col gap-2">
              {/* <Drawer selectedItem={item} /> */}
              <DeleteUserButton id={user._id} email={user.email} />
            </div>
          </div>
        ))}
    </>
  );
};

export default UsersList;

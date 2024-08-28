import { auth } from "@/auth";


export const DashboardNavBar = async () => {
let session = await auth();
let user = session?.user?.email

  return (
    <nav className="flex-1 justify-end p-4 bg-marron">
      Bienvenido {user}
      <div></div>
    </nav>
  );
};

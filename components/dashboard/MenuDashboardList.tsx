import Image from "next/image";
import DeleteButton from "./DeleteButton";
import { Drawer } from "@/components/dashboard/Drawer";
import { PreviewModal } from "@/components/dashboard/PreviewModal";
import { getMenuItems } from "@/utils/serverActions";
const MenuDashboardList = async ({
  query,
  selectedCategory,
}: {
  query: string;
  selectedCategory: string;
}) => {
  const menuItems = await getMenuItems(selectedCategory);

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredMenuItems = Array.isArray(menuItems)
    ? menuItems.filter((item) => {
        return normalizeString(item.title)
          .toLowerCase()
          .includes(normalizeString(query).toLowerCase());
      })
    : [];
  return (
    <>
      <div>
        {Array.isArray(menuItems) && menuItems.length === 0 && (
          <p className="text-xl font-semibold text-marron px-6 py-4">
            No se encontraron productos{" "}
          </p>
        )}
      </div>
      {Array.isArray(menuItems) &&
        filteredMenuItems.map((item) => (
          <div
            key={item.id}
            className="w-full grid grid-cols-6 gap-2 px-6 py-4 border-b border-marron-clarito text-marron"
          >
            <div className="col-span-1 ">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={100}
                height={50}
                className="rounded-sm object-cover w-[100px]"
              />
            </div>
            <div className="col-span-1 text-xl font-semibold">{item.title}</div>
            <div className="col-span-2 text-lg font-medium">
              {item.description}
            </div>
            <div className="col-span-1 text-lg font-semibold">
              {item.price}$
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              {/* <Link
                href={`/dashboard/${item._id}`}
                className="text-blue-500 hover:text-blue-700 font-bold text-start rounded"
              >
                EDITAR
              </Link> */}
              <Drawer selectedItem={item} />
              <DeleteButton id={item._id} title={item.title} />
              <PreviewModal selectedItem={item} />
            </div>
          </div>
        ))}
    </>
  );
};

export default MenuDashboardList;

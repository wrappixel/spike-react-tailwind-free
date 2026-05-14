import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Badge } from "src/components/ui/badge";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

const Notifications = [
  {
    id: 1,
    title: "Item1",
  },
  {
    id: 2,
    title: "Item2",
  },
];

const Notification = () => {
  return (
    <div className="relative group/menu">
      <DropdownMenu>
        <DropdownMenuTrigger render={
          <span
            className="h-10 w-10 hover:text-primary group-hover/menu:bg-lightprimary group-hover/menu:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer relative outline-none focus:outline-none"
            aria-label="Notifications"
          >
            <Icon icon="solar:bell-linear" height={20} />
            <Badge className="h-2 w-2 rounded-full absolute end-2 top-2 bg-primary p-0 border-0" />
          </span>
        } />
        <DropdownMenuContent align="start" className="w-[150px] p-1 bg-white dark:bg-dark border-0 shadow-md">
          {Notifications.map((item) => (
            <DropdownMenuItem key={item?.id} render={
              <Link
                to="#"
                className="px-3 py-2 flex items-center hover:bg-lightprimary group/link w-full gap-3 text-dark dark:text-white cursor-pointer"
              >
                {item?.title}
              </Link>
            } />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notification;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Button } from "src/components/ui/button";
import { Icon } from "@iconify/react";
import user1 from "/src/assets/images/profile/user-1.jpg";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="relative group/menu">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={(props) => (
            <span
              {...props}
              className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary outline-none focus:outline-none"
            >
              <img
                src={user1}
                alt="logo"
                height="35"
                width="35"
                className="rounded-full"
              />
            </span>
          )}
        />
        <DropdownMenuContent align="end" className="w-44 p-1 bg-white dark:bg-dark border-0 shadow-md">
          <DropdownMenuItem
            render={(props) => (
              <Link
                {...props}
                to="#"
                className="px-3 py-3 flex items-center hover:bg-lightprimary group/link w-full gap-3 text-dark dark:text-white cursor-pointer"
              >
                <Icon icon="solar:user-circle-outline" height={20} />
                My Profile
              </Link>
            )}
          />
          <DropdownMenuItem
            render={(props) => (
              <Link
                {...props}
                to="#"
                className="px-3 py-3 flex items-center hover:bg-lightprimary group/link w-full gap-3 text-dark dark:text-white cursor-pointer"
              >
                <Icon icon="solar:letter-linear" height={20} />
                My Account
              </Link>
            )}
          />
          <DropdownMenuItem
            render={(props) => (
              <Link
                {...props}
                to="/"
                className="px-3 py-3 flex items-center hover:bg-lightprimary group/link w-full gap-3 text-dark dark:text-white cursor-pointer"
              >
                <Icon icon="solar:checklist-linear" height={20} />
                My Task
              </Link>
            )}
          />
          <div className="p-3 pt-0">
            <Button
              render={(props) => (
                <Link
                  {...props}
                  to="/auth/login"
                  className="mt-2 w-full border border-primary text-primary bg-transparent hover:bg-primary hover:text-white outline-none focus:outline-none h-9 text-sm font-medium flex items-center justify-center rounded-lg"
                >
                  Logout
                </Link>
              )}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;

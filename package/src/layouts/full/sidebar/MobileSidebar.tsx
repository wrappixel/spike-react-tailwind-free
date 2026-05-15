import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import React from "react";
import FullLogo from "../shared/logo/FullLogo";
import 'simplebar-react/dist/simplebar.min.css';
import Upgrade from "./Upgrade";

const MobileSidebar = () => {
  return (
    <>
      <div className="h-full flex flex-col bg-white dark:bg-dark">
        <div className="px-5 py-6 flex items-center">
          <FullLogo />
        </div>
        <SimpleBar className="h-[calc(100vh-250px)] px-4">
          <nav className="flex flex-col gap-1 mt-2">
            {SidebarContent &&
              SidebarContent?.map((item) => (
                <div className="mb-4" key={item.heading}>
                  <h5 className="text-dark/60 dark:text-white/40 uppercase font-bold leading-none text-[11px] tracking-wider mb-4 ps-4">
                    {item.heading}
                  </h5>
                  <div className="flex flex-col gap-1">
                    {item.children?.map((child, childIndex) => (
                      <React.Fragment key={child.id || childIndex}>
                        <NavItems item={child} />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
          </nav>
        </SimpleBar>
        <div className="px-4 pb-4 absolute bottom-0 w-full">
          <Upgrade />
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;

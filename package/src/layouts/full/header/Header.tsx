import { useState } from 'react';
import { Button } from 'src/components/ui/button';
import { Icon } from '@iconify/react';
import Profile from './Profile';
import Notification from './notification';
import { Sheet, SheetContent, SheetTrigger } from "src/components/ui/sheet";
import MobileSidebar from '../sidebar/MobileSidebar';
import { Link } from 'react-router';

const Header = () => {
  // mobile-sidebar
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <header className="bg-white dark:bg-dark shadow-md rounded-lg py-4 px-6 sticky top-4 z-30">
        <div className="flex gap-3 items-center justify-between w-full ">
          <div className="flex gap-2 items-center">
            {/* Mobile Sidebar Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={
                <span className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer outline-none focus:outline-none">
                  <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
                </span>
              } />
              <SheetContent side="left" className="p-0 w-64 bg-white dark:bg-dark border-0">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
            
            <Notification />
          </div>

          <div className="flex gap-4 items-center">
            <Button
              className="rounded-full py-1 px-5 font-medium bg-primary hover:bg-primary/90 text-white h-10"
              render={
                <Link
                  to="https://wrappixel.com/templates/spike-react-tailwind-admin-template/?ref=376#demos"
                  target="_blank"
                >
                  Check Pro Template
                </Link>
              }
            />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

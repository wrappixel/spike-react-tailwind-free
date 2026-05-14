import React from 'react';
import { ChildItem } from '../Sidebaritems';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router';

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Link 
        to={item.url} 
        target={item.isPro ? 'blank' : '_self'}
        className={`realtive mb-1 sidebar-link flex items-center h-11 relative py-0 ps-6 pe-4 rounded-full transition-all duration-300 ${
          item.url == pathname
            ? `text-primary bg-primary/10 active`
            : `text-dark/90 dark:text-white/80 bg-transparent hover:text-primary hover:bg-primary/5`
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <span className="flex gap-3 align-center items-center">
            {item.icon ? (
              <Icon icon={item.icon} className={`${item.color}`} height={22} />
            ) : (
              <span
                className={`ms-2 me-3 ${
                  item.url == pathname
                    ? ' rounded-full mx-1.5 bg-primary h-[6px] w-[6px]'
                    : 'h-[6px] w-[6px] bg-black/40 dark:bg-white/40 rounded-full'
                } `}
              ></span>
            )}
            <span className={`max-w-32 text-ellipsis overflow-x-hidden text-sm font-medium`}>{item.name}</span>
          </span>
          {item.isPro ? (
            <span className="py-1 px-2 text-[10px] bg-secondary/20 text-secondary rounded-full">
              Pro
            </span>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default NavItems;

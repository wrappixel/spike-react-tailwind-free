import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table';
import { Badge } from 'src/components/ui/badge';
import { Progress } from 'src/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from 'react-icons/hi';

import product1 from '/src/assets/images/products/s1.jpg';
import product2 from '/src/assets/images/products/s2.jpg';
import product3 from '/src/assets/images/products/s3.jpg';
import product4 from '/src/assets/images/products/s4.jpg';
import product5 from '/src/assets/images/products/s5.jpg';

const ProductTable = () => {
  const ProductTableData = [
    {
      img: product1,
      name: 'iPhone 13 pro max-Pacific Blue-128GB storage',
      payment: '$180',
      paymentstatus: 'Partially paid',
      process: 45,
      processcolor: 'primary',
      statuscolor: 'secondary',
      statustext: 'Confirmed',
    },
    {
      img: product2,
      name: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
      payment: '$120',
      paymentstatus: 'Full paid',
      process: 100,
      processcolor: 'success',
      statuscolor: 'success',
      statustext: 'Confirmed',
    },
    {
      img: product3,
      name: 'PlayStation 5 DualSense Wireless Controller',
      payment: '$120',
      paymentstatus: 'Cancelled',
      process: 100,
      processcolor: 'error',
      statuscolor: 'error',
      statustext: 'Cancelled',
    },
    {
      img: product4,
      name: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
      payment: '$120',
      paymentstatus: 'Partially paid',
      process: 45,
      processcolor: 'warning',
      statuscolor: 'secondary',
      statustext: 'Confirmed',
    },
    {
      img: product5,
      name: 'Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74',
      payment: '$150',
      paymentstatus: 'Partially paid',
      process: 20,
      processcolor: 'warning',
      statuscolor: 'secondary',
      statustext: 'Confirmed',
    },
  ];

  return (
    <>
      <div className="rounded-xl shadow-md bg-white dark:bg-dark p-6 relative w-full break-words">
        <h5 className="card-title text-dark dark:text-white">Table</h5>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-white/10 hover:bg-transparent">
                  <TableHead className="p-6 text-base font-semibold text-dark dark:text-white">Products</TableHead>
                  <TableHead className="text-base font-semibold text-dark dark:text-white">Payment</TableHead>
                  <TableHead className="text-base font-semibold text-dark dark:text-white">Status</TableHead>
                  <TableHead className="text-base"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ProductTableData.map((item, index) => (
                  <TableRow key={index} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <TableCell className="whitespace-nowrap ps-6 py-4">
                      <div className="flex gap-3 items-center">
                        <img src={item.img} alt="icon" className="h-[60px] w-[60px] rounded-md object-cover" />
                        <div className="max-w-56">
                          <h6 className="text-sm font-semibold text-dark dark:text-white line-clamp-2">{item.name}</h6>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <h5 className="text-base font-semibold text-dark dark:text-white">
                        {item.payment}
                        <span className="text-dark/50 dark:text-white/40 ml-1">/ 499</span>
                      </h5>
                      <div className="text-sm font-medium text-dark/60 dark:text-white/50 mb-2">
                        {item.paymentstatus}
                      </div>
                      <div className="me-5">
                        <Progress
                          value={item.process}
                          className="h-1.5 bg-gray-100 dark:bg-white/10"
                          indicatorClassName={`bg-${item.processcolor}`}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        className={`font-medium border-0 px-3 py-1 bg-${item.statuscolor}/10 text-${item.statuscolor} hover:bg-${item.statuscolor}/20`}
                      >
                        {item.statustext}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none focus:outline-none p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                          <HiOutlineDotsVertical size={20} className="text-dark/60 dark:text-white/60" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white dark:bg-dark border-0 shadow-lg p-1">
                          <DropdownMenuItem className="cursor-pointer hover:bg-lightprimary px-3 py-2 text-sm rounded-md">Edit</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-lightprimary px-3 py-2 text-sm rounded-md text-error">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductTable };

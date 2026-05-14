import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table';
import { Badge } from 'src/components/ui/badge';
import CardBox from 'src/components/shared/CardBox';

import user1 from '/src/assets/images/profile/user-2.jpg';
import user2 from '/src/assets/images/profile/user-3.jpg';
import user3 from '/src/assets/images/profile/user-4.jpg';
import user4 from '/src/assets/images/profile/user-5.jpg';
import user5 from '/src/assets/images/profile/user-1.jpg';

const TopPayingClients = ({ className }: { className?: string }) => {
  const TopEmployeesData = [
    {
      id: '1',
      imgsrc: user1,
      name: 'Mark J. Freeman',
      post: 'Developer',
      status: 'Available',
      rate: 80,
      skill: 'HTML',
      statuscolor: 'success',
    },
    {
      id: '2',
      imgsrc: user2,
      name: 'Nina R. Oldman',
      post: 'Designer',
      status: 'On Holiday',
      rate: 70,
      skill: 'JavaScript',
      statuscolor: 'primary',
    },
    {
      id: '3',
      imgsrc: user3,
      name: 'Arya H. Shah',
      post: 'Developer',
      status: 'Absent',
      rate: 40,
      skill: 'React',
      statuscolor: 'error',
    },
    {
      id: '4',
      imgsrc: user4,
      name: 'June R. Smith',
      post: 'Designer',
      status: 'On Leave',
      rate: 20,
      skill: 'Vuejs',
      statuscolor: 'warning',
    },
    {
      id: '5',
      imgsrc: user5,
      name: 'Deo K. Luis',
      post: 'Developer',
      status: 'Available',
      rate: 65,
      skill: 'Angular',
      statuscolor: 'info',
    },
  ];

  return (
    <>
      <CardBox className={className}>
        <div className="flex justify-between align-baseline mb-4">
          <h5 className="card-title">Top Paying Clients</h5>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-0">
              <TableRow className="border-0 hover:bg-transparent">
                <TableHead className="text-15 font-semibold py-3 whitespace-nowrap">
                  Profile
                </TableHead>
                <TableHead className="text-15 font-semibold py-3 whitespace-nowrap">
                  Hour Rate
                </TableHead>
                <TableHead className="text-15 font-semibold py-3 whitespace-nowrap">
                  Technology
                </TableHead>
                <TableHead className="text-15 font-semibold py-3 whitespace-nowrap text-right">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TopEmployeesData.map((item, index) => (
                <TableRow key={index} className="border-0">
                  <TableCell className="whitespace-nowrap py-3">
                    <div className="flex gap-4 items-center">
                      <img src={item.imgsrc} alt="icon" className="h-12 w-12 rounded-full" />
                      <div>
                        <h6 className="text-15 font-semibold">{item.name}</h6>
                        <p className="text-13 font-medium text-dark/60 dark:text-white/50">{item.post}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3">
                    <p className="text-sm font-medium text-dark dark:text-white">${item.rate}/hour</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3">
                    <p className="text-sm font-medium text-dark dark:text-white">{item.skill}</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 text-right">
                    <Badge
                      className={`font-medium border-0 px-3 py-1 bg-${item.statuscolor}/10 text-${item.statuscolor} hover:bg-${item.statuscolor}/20`}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardBox>
    </>
  );
};

export default TopPayingClients;

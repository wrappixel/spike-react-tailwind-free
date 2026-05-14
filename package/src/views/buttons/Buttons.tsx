import { Button } from 'src/components/ui/button';
import CardBox from 'src/components/shared/CardBox';

const Buttons = () => {
  return (
    <div>
      <CardBox>
        <h5 className="card-title">Buttons</h5>
        <div className="flex gap-4 flex-wrap mt-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">Primary</Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">Secondary</Button>
          <Button className="bg-success hover:bg-success/90 text-white">Success</Button>
          <Button className="bg-info hover:bg-info/90 text-white">Info</Button>
          <Button className="bg-warning hover:bg-warning/90 text-white">Warning</Button>
          <Button className="bg-error hover:bg-error/90 text-white">Danger</Button>
          <Button className="bg-gray-100 hover:bg-gray-200 text-dark">Light</Button>
          <Button className="bg-dark hover:bg-dark/90 text-white dark:bg-white dark:text-dark dark:hover:bg-white/90">Dark</Button>
        </div>
      </CardBox>
      <CardBox className="mt-6">
        <h5 className="card-title">Outline Buttons</h5>
        <div className="flex gap-4 flex-wrap mt-2">
          <Button
            className="border border-primary text-primary bg-transparent hover:bg-primary hover:text-white rounded-full"
            variant="outline"
          >
            Primary
          </Button>
          <Button
            className="border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white rounded-full"
            variant="outline"
          >
            Secondary
          </Button>
          <Button
            className="border border-success text-success bg-transparent hover:bg-success hover:text-white rounded-full"
            variant="outline"
          >
            Success
          </Button>
          <Button
            className="border border-info text-info bg-transparent hover:bg-info hover:text-white rounded-full"
            variant="outline"
          >
            Info
          </Button>
          <Button
            className="border border-warning text-warning bg-transparent hover:bg-warning hover:text-white rounded-full"
            variant="outline"
          >
            Warning
          </Button>
          <Button
            className="border border-error text-error bg-transparent hover:bg-error hover:text-white rounded-full"
            variant="outline"
          >
            Danger
          </Button>
          <Button 
            className="border border-dark/30 text-dark/60 bg-transparent hover:bg-dark/10 rounded-full dark:border-white/30 dark:text-white/60 dark:hover:bg-white/10" 
            variant="outline"
          >
            Light
          </Button>
          <Button
            className="border border-dark text-dark bg-transparent hover:bg-dark hover:text-white rounded-full dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark"
            variant="outline"
          >
            Dark
          </Button>
        </div>
      </CardBox>
    </div>
  );
};

export default Buttons;

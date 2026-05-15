import { Button } from "src/components/ui/button";
import UpgradePlan from "/src/assets/images/backgrounds/upgrade.svg";
import { Link } from "react-router";
const Upgrade = () => {
  return (
    <>
      <div className="mt-2 relative">
        <div className="bg-primary/10 py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h6 className="text-base text-dark dark:text-white">Check Pro
              Version</h6>
              <Button className="mt-3 rounded-full font-medium w-fit px-5 bg-primary hover:bg-primary/90 text-white h-8 text-xs" render={
                <Link to="https://wrappixel.com/templates/spike-react-tailwind-admin-template/?ref=376#demos" target="_blank">
                  Check
                </Link>
              } />
            </div>
            <img src={UpgradePlan} alt="upgrade" className="absolute h-24 w-24 end-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;

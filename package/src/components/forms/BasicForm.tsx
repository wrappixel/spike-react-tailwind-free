import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";

const BasicForm = () => {
  return (
    <div className="rounded-xl shadow-md bg-white dark:bg-dark p-6 relative w-full break-words">
      <h5 className="card-title text-dark dark:text-white">Form</h5>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-6 col-span-12">
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name">Your Name</Label>
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="h-10 border-gray-300 dark:border-white/10"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1">Your email</Label>
                </div>
                <Input
                  id="email1"
                  type="email"
                  placeholder="name@Spike.com"
                  required
                  className="h-10 border-gray-300 dark:border-white/10"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1">Your password</Label>
                </div>
                <Input
                  id="password1"
                  type="password"
                  required
                  className="h-10 border-gray-300 dark:border-white/10"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="countries1">Country</Label>
                </div>
                <Select required>
                  <SelectTrigger id="countries1" className="h-10 border-gray-300 dark:border-white/10">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-dark">
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="countries2">State</Label>
                </div>
                <Select required>
                  <SelectTrigger id="countries2" className="h-10 border-gray-300 dark:border-white/10">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-dark">
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="countries3">City</Label>
                </div>
                <Select required>
                  <SelectTrigger id="countries3" className="h-10 border-gray-300 dark:border-white/10">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-dark">
                    <SelectItem value="rajkot">Rajkot</SelectItem>
                    <SelectItem value="ahemedabad">Ahemedabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">Submit</Button>
            <Button className="bg-error hover:bg-error/90 text-white px-6">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
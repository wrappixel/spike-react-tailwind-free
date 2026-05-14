import { Button } from "src/components/ui/button";
import { Checkbox } from "src/components/ui/checkbox";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { Link, useNavigate } from "react-router";

const AuthLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username">Username</Label>
          </div>
          <Input
            id="Username"
            type="text"
            required
            className="h-11 border-gray-300 focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="userpwd">Password</Label>
          </div>
          <Input
            id="userpwd"
            type="password"
            required
            className="h-11 border-gray-300 focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer text-sm"
            >
              Remember this Device
            </Label>
          </div>
          <Link to={"/"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-semibold"
        >
          Sign in
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;

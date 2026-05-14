import { Link } from "react-router";
import ErrorImg from "/src/assets/images/backgrounds/errorimg.svg";
import { Button } from "src/components/ui/button";
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-dark">
        <div className="text-center px-4">
          <img src={ErrorImg} alt="error" className="mb-4 mx-auto max-w-full h-auto" />
          <h1 className="text-dark dark:text-white text-4xl font-bold mb-4">Opps!!!</h1>
          <h6 className="text-xl text-dark/70 dark:text-white/60 mb-8">
            This page you are looking for could not be found.
          </h6>
          <Button
            className="w-fit mx-auto bg-primary hover:bg-primary/90 text-white px-8 h-11 rounded-full font-semibold"
            render={
              <Link to="/">
                Go Back to Home
              </Link>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Error;

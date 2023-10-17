import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Lato">
      
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
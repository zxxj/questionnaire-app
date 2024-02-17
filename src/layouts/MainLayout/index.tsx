import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="container">
      <div className="header">main layout header</div>

      <div className="content">
        <Outlet />
      </div>

      <div className="footer">main layout footer</div>
    </div>
  );
};

export default MainLayout;

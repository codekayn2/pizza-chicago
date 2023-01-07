import Header from "../components/Header/Header";
import { Outlet } from "react-router";

const MainLayout:React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

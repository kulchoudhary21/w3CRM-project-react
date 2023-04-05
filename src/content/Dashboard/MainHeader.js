import React, { Suspense } from "react";
import "../../ui/css/style.css";
const DashBody = React.lazy(() => import("./navs/DashBody"));
const Header = React.lazy(() => import("./navs/Header"));
const NavHeader = React.lazy(() => import("./navs/SideBar"));
const SideBar=React.lazy(()=>import("./navs/SideBar"))
function MainHeader() {
  return (
    <div>
      <Suspense fallback="<>...<>">
        <Header />
        <NavHeader />
        <SideBar />
        <DashBody />
      </Suspense>
    </div>
  );
}
export default MainHeader;

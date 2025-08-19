import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import LoadingPage from "@components/Loading";
import { Suspense } from "react";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;

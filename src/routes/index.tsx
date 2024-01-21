import { Route, Routes } from "react-router-dom";
import HomePageView from "../views/HomePage";
import OrderView from "../views/Order";
import OrderStep01 from "../components/OrderSteps/Step01";
import OrderStep02 from "../components/OrderSteps/Step02";
import OrderStep03 from "../components/OrderSteps/Step03";
import ConclusionView from "../views/Conclusion";

const routes = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePageView />} />
      <Route
        path="/order/size"
        element={<OrderView children={<OrderStep01 />} />}
      />
      <Route
        path="/order/dough"
        element={<OrderView children={<OrderStep02 />} />}
      />
      <Route
        path="/order/quantity"
        element={<OrderView children={<OrderStep03 />} />}
      />
      <Route path="/order/conclusion" element={<ConclusionView />} />
    </Routes>
  </>
);

export default routes;

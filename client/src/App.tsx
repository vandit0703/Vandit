import { useEffect, useRef } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import PhotographerSaas from "@/pages/PhotographerSaas";
import BrassManufacturingErp from "@/pages/BrassManufacturingErp";
import HospitalManagement from "@/pages/HospitalManagement";
import JewelryEcommerce from "@/pages/JewelryEcommerce";
import CrmBusinessAutomation from "@/pages/CrmBusinessAutomation";
import TransportManagement from "@/pages/TransportManagement";
import MedicalStoreManagement from "@/pages/MedicalStoreManagement";
import RestaurantManagement from "@/pages/RestaurantManagement";
import LinkGuardBrowser from "@/pages/LinkGuardBrowser";
import TechStack from "@/pages/TechStack";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (previousLocation.current === location) return;
    previousLocation.current = location;

    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/photographer-saas" component={PhotographerSaas} />
      <Route path="/projects/brass-manufacturing-erp" component={BrassManufacturingErp} />
      <Route path="/projects/hospital-management" component={HospitalManagement} />
      <Route path="/projects/jewelry-ecommerce" component={JewelryEcommerce} />
      <Route path="/projects/crm-business-automation" component={CrmBusinessAutomation} />
      <Route path="/projects/transport-management" component={TransportManagement} />
      <Route path="/projects/medical-store-management" component={MedicalStoreManagement} />
      <Route path="/projects/restaurant-management" component={RestaurantManagement} />
      <Route path="/projects/linkguard-browser" component={LinkGuardBrowser} />
      <Route path="/tech-stack" component={TechStack} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

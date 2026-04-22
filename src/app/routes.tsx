import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Expertise } from "./components/Expertise";
import { Contact } from "./components/Contact";
import { Terms } from "./components/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "expertise", Component: Expertise },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
    ],
  },
]);

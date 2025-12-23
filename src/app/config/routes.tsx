import { type RouteObject } from "react-router";
import { CarouselPage } from "@/pages/carousel/ui/CarouselPage.tsx";
import { StartPage } from "@/pages/start-page/ui/StartPage.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <StartPage />,
      },
      {
        path: "results",
        element: <CarouselPage />,
      },
    ],
  },
];

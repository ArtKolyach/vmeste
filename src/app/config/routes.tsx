import { type RouteObject } from "react-router";
import { PaperPlane } from "../../pages/ui/subpages/PaperPlane.tsx";
import { PoolPage } from "../../pages/ui/subpages/PoolPage.tsx";
import { PineapplePage } from "../../pages/ui/subpages/PineapplePage.tsx";
import { ShowPage } from "../../pages/ui/subpages/ShowPage.tsx";
import { EightballPage } from "../../pages/ui/subpages/EightballPage.tsx";
import { FinalPage } from "../../pages/ui/FinalPage.tsx";
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
      {
        path: "show",
        element: <ShowPage />,
      },
      {
        path: "next",
        element: <EightballPage />,
      },
      {
        path: "paper",
        element: <PaperPlane />,
      },
      {
        path: "deeper",
        element: <PoolPage />,
      },
      {
        path: "pineapple",
        element: <PineapplePage />,
      },
      {
        path: "/final",
        element: <FinalPage />,
      },
    ],
  },
];

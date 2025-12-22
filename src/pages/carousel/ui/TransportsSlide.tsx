import { Slide } from "@/entities/slide";
import {
  bottomStyle,
  centerTitleStyle,
  headerStyle,
} from "@/pages/carousel/ui/styles.ts";
import { Typography } from "antd";
import planePng from "@/assets/plain.png";
import horsePng from "@/assets/horse.png";

const { Title } = Typography;

export const TransportsSlide = () => {
  return (
    <Slide>
      <Title style={{ ...headerStyle, zIndex: 2 }}>Прокатились на</Title>
      <Title style={{ ...centerTitleStyle, zIndex: 2 }}>12</Title>
      <Title style={{ ...bottomStyle, zIndex: 2 }}>видах транспорта</Title>

      <img
        src={planePng}
        alt="plain"
        style={{
          position: "absolute",
          width: "100vw",
          top: "10dvh",
          right: "-40vw",
          transform: "rotate(-30deg)",
          zIndex: 1,
        }}
      />
      <img
        src={horsePng}
        alt="horse"
        style={{
          position: "absolute",
          width: "80vw",
          left: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />
    </Slide>
  );
};

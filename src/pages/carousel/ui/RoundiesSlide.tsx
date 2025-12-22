import { Slide } from "@/entities/slide";
import {
  bottomStyle,
  centerTitleStyle,
  headerStyle,
} from "@/pages/carousel/ui/styles.ts";
import { Typography } from "antd";
import { Roundie } from "@/widgets/Roundie.tsx";
import roundie1 from "@/assets/roundies/roundie1.jpg";
import roundie2 from "@/assets/roundies/roundie2.jpg";
import roundie3 from "@/assets/roundies/roundie3.jpg";
import roundie4 from "@/assets/roundies/roundie4.jpg";
import roundie5 from "@/assets/roundies/roundie5.jpg";

const { Title } = Typography;

export const RoundiesSlide = () => {
  return (
    <Slide>
      <Title style={headerStyle}>Любовались друг другом на</Title>
      <Title style={centerTitleStyle}>187</Title>
      <Title style={bottomStyle}>кружочках</Title>

      <Roundie
        src={roundie1}
        style={{ bottom: "18dvh", left: "71dvw", transform: "scale(0.8)" }}
      />
      <Roundie
        src={roundie3}
        style={{ bottom: "18dvh", left: "-12dvw", transform: "scale(0.8)" }}
      />
      <Roundie src={roundie2} style={{ bottom: "4dvh", left: "-2dvw" }} />
      <Roundie src={roundie5} style={{ bottom: "4dvh", left: "70dvw" }} />
      <Roundie
        src={roundie4}
        style={{
          left: "34dvw",
          bottom: 0,
          transform: "scale(1.2)",
        }}
      />
    </Slide>
  );
};

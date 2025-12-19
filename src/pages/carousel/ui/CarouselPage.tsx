import { Carousel, Flex, Typography } from "antd";
import { Slide } from "@/entities/slide";
import { Logo } from "@/widgets/logo/ui/Logo.tsx";

const { Title, Text } = Typography;

export const CarouselPage = () => {
  return (
    <Flex
      vertical
      align="center"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        maxWidth: "100vw",
      }}
    >
      <div style={{ position: "absolute", top: -100, zIndex: 2 }}>
        <Logo />
      </div>
      <Carousel
        dots
        arrows
        infinite={false}
        draggable
        fade
        style={{ width: "100%", height: "100vh", maxWidth: "100vw" }}
      >
        <Slide backgroundColor="lightcoral">
          <Title style={{ textAlign: "center" }}>Отправили друг другу</Title>
          <Title style={{ fontSize: 100 }}>75 161</Title>
          <Title style={{ textAlign: "center" }}>сообщений</Title>
        </Slide>
        <Slide backgroundColor="lightcoral">
          <Title style={{ fontSize: 100 }}>53</Title>
          <Title style={{ textAlign: "center" }}>
            <br />
            пожелали друг другу пи ночи
          </Title>
        </Slide>
        <Slide backgroundColor="yellow">2</Slide>
        <Slide>3</Slide>
      </Carousel>
    </Flex>
  );
};

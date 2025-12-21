import { Carousel, Flex, Typography } from "antd";
import { Slide } from "@/entities/slide";
import { Logo } from "@/widgets/logo/ui/Logo.tsx";
import styles from "./CarouselPage.module.css";

const { Title } = Typography;

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
      <div style={{ position: "absolute", top: 0, zIndex: 2 }}>
        <Logo style={{ maxHeight: "40vh", padding: "5vh" }} />
      </div>
      <Carousel
        dots
        arrows
        infinite={false}
        draggable
        fade
        className={styles.carousel}
        style={{
          width: "100%",
          height: "100vh",
          maxWidth: "100vw",
          // backgroundColor: "#4e0018",
        }}
      >
        {/*СООБЩЕНИЯ*/}
        <Slide>
          <Title>Отправили друг другу</Title>
          <Title style={{ fontSize: 100 }}>75 161</Title>
          <Title>сообщение</Title>
        </Slide>
        {/*КРУЖОЧКИ*/}
        <Slide>
          <Title>Любовались друг другом на</Title>
          <Title style={{ fontSize: 100 }}>187</Title>
          <Title>кружочках</Title>
        </Slide>
        {/*ГОЛОСОВЫЕ*/}
        <Slide>
          <Title>Слушали голос друг друга на протяжении</Title>
          <Title style={{ fontSize: 100 }}>111</Title>
          <Title>минут</Title>
        </Slide>
        {/*РЕСТОРАНЫ*/}
        <Slide>
          <Title>Вкусно покушали в</Title>
          <Title style={{ fontSize: 100 }}>26</Title>
          <Title>ресторанах</Title>
        </Slide>
        {/*ГОРОДА*/}
        <Slide>
          <Title>Побывали в</Title>
          <Title style={{ fontSize: 100 }}>6</Title>
          <Title>городах</Title>
        </Slide>
        {/*ТРАНСПОРТ*/}
        <Slide>
          <Title>Прокатились на</Title>
          <Title style={{ fontSize: 100 }}>12</Title>
          <Title>видах транспорта</Title>
        </Slide>
        {/*АКТИВНОСТИ*/}
        <Slide>
          <Title>Посетили</Title>
          <Title style={{ fontSize: 75 }}>3</Title>
          <Flex justify="center" align="center" wrap gap={20}>
            <Title style={{ marginTop: 0, color: "#c586ff" }} level={2}>
              выставки
            </Title>
            <Title level={2}>театра</Title>
            <Title style={{ color: "#ff7665" }} level={2}>
              концерта
            </Title>
          </Flex>
          <Title style={{ fontSize: 75 }}>2</Title>
          <Title level={2}>матча</Title>
        </Slide>
        {/*ФОТКИ*/}
        <Slide>
          <Title>Сделали</Title>
          <Title style={{ fontSize: 100 }}>582</Title>
          <Title>совместных фотографии</Title>
        </Slide>
        {/*ВЕРНУЛИСЬ С РАБОТЫ*/}
        <Slide>
          <Title>Вернулись с работы</Title>
          <Title style={{ fontSize: 100 }}>20</Title>
          <Title>раз</Title>
        </Slide>
        {/*ЧУ*/}
        <Slide>
          <Title>Послали друг другу</Title>
          <Title style={{ fontSize: 100 }}>335</Title>
          <Title style={{ fontSize: 100 }}>ЧУ</Title>
        </Slide>
        {/*ПИ НОЧИ*/}
        <Slide
          background={`linear-gradient(30deg, ${"#1f0c53"}, ${"#180b33"})`}
        >
          <div>
            <Title style={{ fontSize: 100 }}>53</Title>
            <Title level={2}>раза</Title>
          </div>
          <Title>пожелали друг другу пи ночи</Title>
        </Slide>
      </Carousel>
    </Flex>
  );
};

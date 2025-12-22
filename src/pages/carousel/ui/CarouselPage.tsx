import { Carousel, Flex, Typography, Image, FloatButton } from "antd";
import { Slide } from "@/entities/slide";
import { Logo } from "@/widgets/logo/ui/Logo.tsx";
import styles from "./CarouselPage.module.css";
import { type CSSProperties, useCallback, useRef, useState } from "react";
import kissPng from "@/assets/kiss.png";
import { MutedOutlined, SoundFilled } from "@ant-design/icons";

const { Title } = Typography;

const titleStyle: CSSProperties = {
  fontSize: "5em",
  background:
    "radial-gradient(#812125FF 50%, transparent 90%, transparent 100%)",
  borderRadius: 100,
  padding: 25,
};

export const CarouselPage = () => {
  const guitarMusicRef = useRef(new Audio("/vmeste/music/guitar.mp3"));
  guitarMusicRef.current.loop = true;
  const musicBoxRef = useRef(new Audio("/vmeste/music/music-box.mp3"));
  musicBoxRef.current.loop = true;

  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleSlideChange = useCallback(
    (current: number, next: number) => {
      if (musicPlaying) {
        if (next === 10) {
          guitarMusicRef.current.pause();
          musicBoxRef.current.currentTime = guitarMusicRef.current.currentTime;
          musicBoxRef.current.play();
        }
        if (current === 10) {
          musicBoxRef.current.pause();
          guitarMusicRef.current.currentTime = musicBoxRef.current.currentTime;
          guitarMusicRef.current.play();
        }
      }
    },
    [musicPlaying],
  );

  return (
    <Flex
      vertical
      align="center"
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        maxWidth: "100dvw",
      }}
    >
      <div style={{ position: "absolute", top: 0, zIndex: 2 }}>
        <Logo style={{ maxHeight: "40vh", padding: "2vh 5vh 0 5vh" }} />
      </div>
      <Carousel
        dots
        arrows
        infinite={false}
        draggable
        fade
        className={styles.carousel}
        beforeChange={handleSlideChange}
        style={{
          width: "100%",
          height: "100dvh",
          maxWidth: "100vw",
        }}
      >
        {/*СООБЩЕНИЯ*/}
        <Slide>
          <Title>Отправили друг другу</Title>
          <Title style={titleStyle}>75 161</Title>
          <Title>сообщение</Title>
        </Slide>
        {/*КРУЖОЧКИ*/}
        <Slide>
          <Title>Любовались друг другом на</Title>
          <Title style={titleStyle}>187</Title>
          <Title>кружочках</Title>
        </Slide>
        {/*ГОЛОСОВЫЕ*/}
        <Slide>
          <Title>Слушали голос друг друга на протяжении</Title>
          <Title style={titleStyle}>111</Title>
          <Title>минут</Title>
        </Slide>
        {/*РЕСТОРАНЫ*/}
        <Slide>
          <Title>Вкусно покушали в</Title>
          <Title style={titleStyle}>26</Title>
          <Title>ресторанах</Title>
        </Slide>
        {/*ГОРОДА*/}
        <Slide>
          <Title>Побывали в</Title>
          <Title style={titleStyle}>6</Title>
          <Title>городах</Title>
        </Slide>
        {/*ТРАНСПОРТ*/}
        <Slide>
          <Title>Прокатились на</Title>
          <Title style={titleStyle}>12</Title>
          <Title>видах транспорта</Title>
        </Slide>
        {/*АКТИВНОСТИ*/}
        <Slide>
          <Title>Посетили</Title>
          <Title style={{ ...titleStyle, fontSize: "4em" }}>3</Title>
          <Flex justify="center" align="center" wrap gap={20}>
            <Title style={{ marginTop: 0, color: "#c586ff" }} level={2}>
              выставки
            </Title>
            <Title level={2}>театра</Title>
            <Title style={{ color: "#ff7665" }} level={2}>
              концерта
            </Title>
          </Flex>
          <Title style={{ ...titleStyle, fontSize: "4em" }}>2</Title>
          <Title level={2}>матча</Title>
        </Slide>
        {/*ФОТКИ*/}
        <Slide>
          <Title>Сделали</Title>
          <Title style={titleStyle}>582</Title>
          <Title>совместные фотографии</Title>
        </Slide>
        {/*ВЕРНУЛИСЬ С РАБОТЫ*/}
        <Slide>
          <Title>Вернулись с работы</Title>
          <Title style={titleStyle}>20</Title>
          <Title>раз</Title>
        </Slide>
        {/*ЧУ*/}
        <Slide>
          <Title>Послали друг другу</Title>
          <Title style={titleStyle}>335</Title>
          <Flex align="center" gap={10}>
            <Title style={{ fontSize: titleStyle.fontSize, marginTop: 0 }}>
              Чу
            </Title>
            <Image preview={false} src={kissPng} style={{ maxWidth: "10em" }} />
          </Flex>
        </Slide>
        {/*ПИ НОЧИ*/}
        <Slide
          background={`linear-gradient(30deg, ${"#1f0c53"}, ${"#180b33"})`}
        >
          <Flex vertical gap={10}>
            <Title
              style={{
                ...titleStyle,
                color: "black",
                background:
                  "radial-gradient(#FFDA83FF 50%, transparent 90%, transparent 100%)",
              }}
            >
              53
            </Title>
            <Title style={{ color: "#FFDA83FF" }} level={2}>
              раза
            </Title>
          </Flex>
          <Title style={{ color: "#FFDA83FF" }}>
            пожелали друг другу пи ночи
          </Title>
        </Slide>
      </Carousel>
      <FloatButton
        icon={musicPlaying ? <SoundFilled /> : <MutedOutlined />}
        onClick={() => {
          if (musicPlaying) {
            musicBoxRef.current.pause();
            guitarMusicRef.current.pause();
          } else {
            guitarMusicRef.current.play();
          }
          setMusicPlaying((prev) => !prev);
        }}
      />
    </Flex>
  );
};

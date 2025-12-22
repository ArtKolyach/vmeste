import { Carousel, Flex, Typography, Image, FloatButton } from "antd";
import { Slide } from "@/entities/slide";
import { Logo } from "@/widgets/logo/ui/Logo.tsx";
import styles from "./CarouselPage.module.css";
import { type CSSProperties, useCallback, useRef, useState } from "react";
import kissPng from "@/assets/kiss.png";
import { MutedOutlined, SoundFilled } from "@ant-design/icons";

const { Title } = Typography;

const getLogoTranslation = (slideIndex: number | null) => {
  switch (slideIndex) {
    case 8:
      return "translateY(15dvh)";
    case 12:
      return "translateY(40dvh)";
    default:
      return undefined;
  }
};

const titleStyle: CSSProperties = {
  fontSize: "5em",
  background:
    "radial-gradient(#812125FF 50%, transparent 90%, transparent 100%)",
  borderRadius: 100,
  padding: 25,
  margin: 0,
};

const headerStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  alignItems: "end",
};

const centerStyle: CSSProperties = {
  flex: "none",
};

const bottomStyle: CSSProperties = {
  flex: 1,
};

const centerTitleStyle = { ...titleStyle, ...centerStyle };

export const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);

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
      setCurrentSlide(next);
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
      <div
        style={{
          position: "absolute",
          top: 0,
          transform: getLogoTranslation(currentSlide),
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={styles.logo}
      >
        <Logo style={{ maxHeight: "40vh", padding: "2vh 5vh 0 5vh" }} />
        <Title
          className={styles.canAll}
          style={{ margin: 0, opacity: currentSlide === 12 ? 100 : 0 }}
        >
          мы сможем всё!
        </Title>
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
          <Title style={headerStyle}>Отправили друг другу</Title>
          <Title style={centerTitleStyle}>75 161</Title>
          <Title style={bottomStyle}>сообщение</Title>
        </Slide>
        {/*КРУЖОЧКИ*/}
        <Slide>
          <Title style={headerStyle}>Любовались друг другом на</Title>
          <Title style={centerTitleStyle}>187</Title>
          <Title style={bottomStyle}>кружочках</Title>
        </Slide>
        {/*ГОЛОСОВЫЕ*/}
        <Slide>
          <Title style={headerStyle}>
            Слушали голос друг друга на протяжении
          </Title>
          <Title style={centerTitleStyle}>111</Title>
          <Title style={bottomStyle}>минут</Title>
        </Slide>
        {/*РЕСТОРАНЫ*/}
        <Slide>
          <Title style={headerStyle}>Вкусно покушали в</Title>
          <Title style={centerTitleStyle}>26</Title>
          <Title style={bottomStyle}>ресторанах</Title>
        </Slide>
        {/*ГОРОДА*/}
        <Slide>
          <Title style={headerStyle}>Побывали в</Title>
          <Title style={centerTitleStyle}>6</Title>
          <Title style={bottomStyle}>городах</Title>
        </Slide>
        {/*ТРАНСПОРТ*/}
        <Slide>
          <Title style={headerStyle}>Прокатились на</Title>
          <Title style={centerTitleStyle}>12</Title>
          <Title style={bottomStyle}>видах транспорта</Title>
        </Slide>
        {/*АКТИВНОСТИ*/}
        <Slide>
          <Title style={{ ...headerStyle, marginTop: "30%" }}>Посетили</Title>
          <Flex
            vertical
            align="center"
            justify="center"
            gap={10}
            style={centerStyle}
          >
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
          </Flex>
          <Title style={{ ...bottomStyle, marginTop: 0 }} level={2}>
            матча
          </Title>
        </Slide>
        {/*ФОТКИ*/}
        <Slide>
          <Title style={headerStyle}>Сделали</Title>
          <Title style={centerTitleStyle}>582</Title>
          <Title style={bottomStyle}>совместные фотографии</Title>
        </Slide>
        {/*ВЕРНУЛИСЬ С РАБОТЫ*/}
        <Slide>
          <Title style={headerStyle}>Вернулись с работы</Title>
          <Title style={centerTitleStyle}>20</Title>
          <Title style={bottomStyle}>раз</Title>
        </Slide>
        {/*ЧУ*/}
        <Slide>
          <Title style={headerStyle}>Послали друг другу</Title>
          <Title style={centerTitleStyle}>335</Title>
          <Flex align="center" gap={10} style={bottomStyle}>
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
          <div style={headerStyle}></div>
          <Flex vertical gap={10} style={centerStyle}>
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
          <Title style={{ color: "#FFDA83FF", ...bottomStyle }}>
            пожелали друг другу пи ночи
          </Title>
        </Slide>
        <Slide gap={30}>
          <Title style={{ ...titleStyle, fontSize: "10vw", marginTop: "30%" }}>
            Много
          </Title>
          <Title>смеялись</Title>
          <Title style={{ ...titleStyle, fontSize: "10vw" }}>
            Недостаточно
          </Title>
          <Title>обнимались</Title>
          <Title style={{ ...titleStyle, fontSize: "10vw" }}>Бесконечно</Title>
          <Title>любили</Title>
        </Slide>
        <Slide>
          <></>
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

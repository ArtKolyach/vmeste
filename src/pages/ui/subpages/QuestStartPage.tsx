import { QuestPage } from "../QuestPage.tsx";
import boxPng from "../../../assets/box.png";

export const QuestStartPage = () => {
  return (
    <QuestPage
      backgroundColor={"#ffee9a"}
      title={"На старт!"}
      question={"Введи место, в которое мы приедем"}
      answer={"Картинг"}
      image={boxPng}
      to={"/show"}
      correctText={"Я-ху!"}
    />
  );
};

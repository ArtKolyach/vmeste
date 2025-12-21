import { Button, Flex, Typography } from "antd";
import styles from "./StartPage.module.css";
import { Link } from "react-router";
import { Logo } from "@/widgets/logo/ui/Logo.tsx";

const { Text } = Typography;

export const StartPage = () => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={"10vh"}
      className={styles.pageWrapper}
    >
      <Text style={{ fontSize: 100 }}>2 года</Text>
      <Logo style={{ maxHeight: "50vh", padding: "0 5vw" }} />
      <Link to="results">
        <Button
          style={{
            height: "50px",
            boxShadow: "2px 3px 0 #470481",
            border: "2px solid #470481",
            gap: 0,
          }}
          type="primary"
          shape="round"
        >
          <span>
            А за этот год
            <span style={{ color: "purple" }}>{` МЫ...`}</span>
          </span>
        </Button>
      </Link>
    </Flex>
  );
};

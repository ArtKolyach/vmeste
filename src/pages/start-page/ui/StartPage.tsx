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
      className={styles.pageWrapper}
    >
      <Text style={{ fontSize: 100 }}>2 года</Text>
      <Logo />
      <Link to="results">
        <Button type="primary">К итогам</Button>
      </Link>
    </Flex>
  );
};

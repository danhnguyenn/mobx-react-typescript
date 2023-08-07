import Navigation from "../Navigation";
import { Badge, Avatar, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";

export const Header = observer(() => {
  const {
    rootStore: { cartStore },
  } = useStore();

  return (
    <Space style={{ justifyContent: "space-between", width: "100%" }}>
      <Navigation />
      <Link to="/gio-hang">
        <Badge count={cartStore.sumCart}>
          <Avatar shape="square" icon={<ShoppingCartOutlined />} />
        </Badge>
      </Link>
    </Space>
  );
});

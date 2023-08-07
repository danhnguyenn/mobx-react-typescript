import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";

export default function Navigation() {
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
    },
  ];
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

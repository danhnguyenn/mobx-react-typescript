import { MainLayout } from "../components/layouts";
import { Space } from "antd";
import { productList } from "../models";
import { CardProduct } from "../components/Card/Card";
import { Count } from "../components/Count/Count";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Mua sắm trực tuyến</h1>
      <Space wrap>
        {productList.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
      </Space>
      <Count />
    </MainLayout>
  );
}

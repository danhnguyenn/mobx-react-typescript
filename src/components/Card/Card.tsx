export interface CardProductProps {}
import { Button, Card, Typography } from "antd";
import { Product } from "../../models";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";

const { Meta } = Card;

const { Text } = Typography;

export interface CardProductProps {
  product: Product;
}

export const CardProduct = observer(({ product }: CardProductProps) => {
  const {
    rootStore: { cartStore },
  } = useStore();

  const handleAddToCart = (product: Product) => {
    cartStore.addTocart(product);
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={product.thumnailImage} />}
    >
      <Meta title={product.title} description={product.description} />

      <Text style={{ display: "block" }}>
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price)}
      </Text>
      <Button
        type="primary"
        style={{ marginTop: "10px" }}
        onClick={() => handleAddToCart(product)}
      >
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
});

import { MainLayout } from "../components/layouts";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Typography } from "antd";
import { useStore } from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import { CloseOutlined } from "@ant-design/icons";
import { Product } from "../models";

const { Text } = Typography;

export const CartPage = observer(() => {
  const {
    rootStore: { cartStore },
  } = useStore();

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "thumnailImage",
      key: "thumnailImage",
      render: (thumnailImage: string) => (
        <img src={thumnailImage} style={{ maxWidth: "100px" }} />
      ),
    },

    {
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Số lượng",
      dataIndex: "cartQuantity",
      key: "cartQuantity",
      render: (cartQuantity: number, record: Product) => (
        <Space style={{ gap: "8px" }}>
          <Button type="primary" onClick={() => cartStore.increment(record)}>
            +
          </Button>
          <span>{cartQuantity}</span>
          <Button
            type="primary"
            onClick={() => cartStore.decrement(record)}
            disabled={cartStore.isDisabled}
          >
            -
          </Button>
        </Space>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (price: number) =>
        Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(price),
    },
    {
      title: "Thành tiền",
      dataIndex: "amoutQuantity",
      key: "amoutQuantity",
      render: (amoutQuantity: number) =>
        Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(amoutQuantity),
    },
    {
      title: "Chức năng",
      dataIndex: "id",
      key: "option",
      render: (id: number) => (
        <Button onClick={() => cartStore.deleteCart(id)}>
          <CloseOutlined />
        </Button>
      ),
    },
  ];

  const data = cartStore.getCarts.map((cart) => ({
    ...cart,
    amoutQuantity: cart.cartQuantity * cart.price,
  }));

  const totalCart = data.reduce(
    (total, product) => total + product.amoutQuantity,
    0
  );

  const navigate = useNavigate();

  return (
    <MainLayout>
      <Table dataSource={data} columns={columns} />
      <Text style={{ textAlign: "center", display: "block", fontSize: "24px" }}>
        Tổng tiền:{" "}
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(totalCart)}
      </Text>
      <Button
        type="primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "15px" }}
      >
        Trở về trang chủ
      </Button>
    </MainLayout>
  );
});

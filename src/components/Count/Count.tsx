import { Button } from "antd";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

export const Count = observer(() => {
  const {
    rootStore: { countStore },
  } = useStore();
  const onIncrement = () => {
    countStore.increment();
  };
  const onDecrement = () => {
    countStore.increment();
  };

  return (
    <div>
      <h1>Count: {countStore.getCountValue}</h1>
      <Button onClick={onIncrement} style={{ marginRight: "10px" }}>
        Tăng 1
      </Button>
      <Button onClick={onDecrement}>Giảm 1</Button>
    </div>
  );
});

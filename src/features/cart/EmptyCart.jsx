import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <p className="font-semi bold my-7 md:text-xl ">
        Your cart is still empty. Start adding some pizzas :)
      </p>

      <Button type="primary" to="/menu">
        Back to menu
      </Button>
    </div>
  );
}

export default EmptyCart;

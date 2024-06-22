import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="flex h-96 flex-col items-center justify-center px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;

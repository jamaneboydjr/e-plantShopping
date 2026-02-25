import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (item) => {
    const newQty = item.quantity - 1;
    if (newQty <= 0) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 90, height: 70, objectFit: "cover" }}
            />

            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>
                Item Total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button onClick={() => handleDecrease(item)}>-</button>
                <strong>{item.quantity}</strong>
                <button onClick={() => handleIncrease(item)}>+</button>

                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <button onClick={() => alert("Checkout: Coming Soon")}>Checkout</button>
        <button onClick={() => window.location.href = "/plants"}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

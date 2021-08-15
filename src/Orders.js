import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else setOrders([]);
  }, []);

  return (
    <div className="orders">
      <h1>Your orders</h1>

      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

import { Link, useNavigate } from "react-router-dom";
import "../style/OrdersPage.css";
import orders from "../../newJsonUsers199.json";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";

const OrdersPage = () => {
  const { newUser, setNewUser } = useContext(AuthContext);
  const [newOrders, setNewOrders] = useState(orders.slice(0, 5));

  const navigate = useNavigate();

  let handleOut = () => {
    setNewUser(null);
    return navigate("/");
  };

  return (
    <div className="container">
      <div className="content-conteiner">
        <div className="header">
          <div className="header-user">
            <img src="/Ellipse.png" alt="" />
            <div className="user-block">
              <Link className="user">{newUser}</Link>
              <span className="user-email">admin@example.com</span>
            </div>
          </div>
          <button className="header-btn" onClick={handleOut}>
            Выход
          </button>
        </div>
        <div className="orders">
          <div className="title">
            <h1>Заказы</h1>

            <button className="btn-title">По номеру заказа</button>
          </div>
          <div className="order-content">
            <table>
              <thead className="thead">
                <tr className="tr">
                  <td className="td td-left">Номер заказа</td>
                  <td className="td ">Email</td>
                  <td className="td">Сумма</td>
                  <td className="td td-last">Дата</td>
                </tr>
              </thead>
              <tbody>
                {newOrders.map((newOrder) => {
                  return (
                    <tr key={newOrder.id}>
                      <td className="td td-main td-left-main">
                        <div className="border"></div>
                        {newOrder.id}
                      </td>
                      <td className="td td-main">{newOrder.email}</td>
                      <td className="td td-main">{newOrder.amount}</td>
                      <td className="td td-main td-last-main">
                        {newOrder.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="btn-block">
            <button className="btn-orders ">Показать ещё...</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrdersPage;

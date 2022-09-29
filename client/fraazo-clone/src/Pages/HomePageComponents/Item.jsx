import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi } from "../../Store/Cart/cart.actions";

// remove conditionals
const Item = ({ item, styles, loading }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let handleAddtocart = (id) => {
    if (isAuth) {
      let UserStoredDataFraazo =
        JSON.parse(localStorage.getItem("UserStoredDataFraazo")) || {};
      let loggedInAlready = Object.keys(UserStoredDataFraazo).length;
      let user = 123456789123;
      if (loggedInAlready) {
        user = UserStoredDataFraazo.newSavedNo._id;
      }
      dispatch(addCartApi(user, id));
      alert(`added to cart!`);
    } else {
      alert(`Please Login!`);
    }
  };
  return (
    <>
      <div>
        {loading && (
          <div className="container ">
            <div  className="spinner-grow text-primary" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </div>
      {!loading && (
        <div key={item._id} className={styles.card}>
          <Link to={`/productsdetails/${item._id}`}>
            <div className={styles.cardTop}>
              <img
                style={{ backgroundColor: "rgb(249,249,249)" }}
                src={item.src}
                alt={item.name}
              />
            </div>
          </Link>
          <div className={styles.cardBottom}>
            <Link to={`/productsdetails/${item._id}`}>
              <p
                style={{
                  marginLeft: "5px",
                  fontSize: "14px",
                  color: "#1a201e",
                }}
              >
                {item.name}
              </p>
            </Link>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link to={`/productsdetails/${item._id}`}>
                {" "}
                <div>
                  <div style={{ display: "flex", marginLeft: "5px" }}>
                    <p style={{ color: "#222", fontSize: "13px" }}>
                      {item.quantity} qty
                    </p>
                  </div>
                  <p
                    style={{
                      marginLeft: "5px",
                      fontWeight: "500",
                      color: "#000",
                    }}
                  >
                    ₹ {item.price}
                  </p>
                </div>{" "}
              </Link>
              <div
                className={styles.btnContainer}
                style={{ width: "120px", display: "flex" }}
              >
                <div className={styles.btnAdd}>
                  <div className={styles.cartBtn}>
                    <BsFillCartPlusFill />
                  </div>
                  <p
                    onClick={() => {
                      handleAddtocart(item._id);
                    }}
                  >
                    {" "}
                    ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;

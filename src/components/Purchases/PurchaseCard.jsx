import React from 'react'
import { formatDateDDMMYY } from '../../utils/date';
import "./styles/PurchaseCard.css";

const PurchaseCard = ({purchase}) => {
  return (
    <article className="purchaseCard__container">
      <div className="purchaseCard__info">
        <div className="purchasescard__img">
          <img src={purchase?.product.images[0].url} alt="" />
        </div>
        <h4 className="purchasescard__producttitle">
          {purchase?.product.title}
        </h4>
      </div>
      <div className="purchasescard__details">
        <h4 className="purchasescard__datetitle">
          <span className="purchasecard__span">Date:</span>{" "}
          <span className="purchasecard__span-details">
            {formatDateDDMMYY(purchase?.createdAt)}
          </span>
        </h4>
        <div className="purchasescard__quantity">
          <h4 className="purchasescard__quantitytitle">
            <span className="purchasecard__span">Quantity:</span>{" "}
            <span className="purchasecard__span-details">
              {purchase?.quantity}
            </span>
          </h4>
        </div>
        <h4 className="purchasescard__pricetitle">
          <span className="purchasecard__span">Price:</span>{" "}
          <span className="purchasecard__span-details">
            {purchase?.product.price}
          </span>
        </h4>
      </div>
    </article>
  );
}

export default PurchaseCard
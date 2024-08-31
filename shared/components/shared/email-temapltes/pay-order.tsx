import React from 'react';

interface Props {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Order #{orderId} </h1>

    <p>
      Pay for the order totaling <b>{totalAmount} $</b>. Please click{' '}
      <a href={paymentUrl}>this link</a> to complete the payment.
    </p>
  </div>
);

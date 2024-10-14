import React, { useEffect, useRef } from "react";

const PayPalCheckout = ({ amount }) => {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, 
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Pago exitoso:", order);
          
        },
        onError: (err) => {
          console.error("Error en el pago:", err);
        },
      })
      .render(paypalRef.current);
  }, [amount]);

  return <div ref={paypalRef}></div>;
};

export default PayPalCheckout;

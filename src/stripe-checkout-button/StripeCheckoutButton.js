import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePublishableKey =
    "pk_test_51JggqUSAiU022RSdoM81CTKqdeTYUY76egI2cMgrY88qDv0FXGQmlGNYwbh14A8Zmrdx0bIBMY14sIuLbRAbrW7j00f2ChSBwG";

  return (
    <div className="right">
      <StripeCheckout
        label="Pay Now"
        name="YMc eCom Co"
        billingAddress
        shippingAddress
        description={`your Total is $${price}`}
        price={priceForStripe}
        panelLabel="Pay Now"
        token={(token) => console.log(token)}
        stripeKey={stripePublishableKey}
      />
      {/* <i class="large material-icons mt2 ml3">payment</i> */}
    </div>
  );
};

export default StripeCheckoutButton;

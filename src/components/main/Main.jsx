import "./main.css";
import Card from "../../images/card.png";
import Logo from "../../images/logo.png";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>Payment Information</h1>
            <h5>Choose your method of payment</h5>
          </div>

          <img src={Card} alt="" className="pic" />
        </div>

        <div className="right">
          <img src={Logo} alt="" className="logo" />

          <div className="forms">
            <form className="form">
              <div>
                <label htmlFor="credit card number">Credit card number</label>
                <br />
                <input type="text" placeholder="4324 5433 9382 1030" />
              </div>

              <div>
                <label htmlFor="expiration">Expiration date</label>
                <br />
                <input type="text" placeholder="04/23" />
              </div>
            </form>

            <form className="form">
              <div>
                <label htmlFor="security">Security code</label>
                <br />
                <input type="text" placeholder="536" />
              </div>

              <div>
                <label htmlFor="postal-code">Postal code</label>
                <br />
                <input type="text" placeholder="3198" />
              </div>
            </form>

            <input type="checkbox" name="check" className="check" />
            <span>Use this card for next time purchase</span>
            <br />
            <input type="button" value="Add card" className="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

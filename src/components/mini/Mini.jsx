import "./mini.css";

const Mini = () => {
  return (
    <div className="mini">
      <div className="cover">
        <div className="mini-container">
          <ul>
            <li>Subtotal</li>
            <li>Estimated TAX</li>
            <li>
              Promotional code: <span>Z4KXLM9A</span>
            </li>
          </ul>

          <ul>
            <li>₦2,497.00</li>
            <li>₦119.64</li>
            <li>₦-60.00</li>
          </ul>
        </div>
      </div>

      <div className="cover">
        <div className="mini-container2">
          <input type="button" value="Complete Payment" className="Button" />
          <h2>Total: ₦2,556.64</h2>
        </div>
      </div>
    </div>
  );
};

export default Mini;

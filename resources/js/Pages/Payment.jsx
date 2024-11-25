function Payment() {
    return (
        <div className="payment-options">
            <div className="payment_card">
                <p>
                    Card number:
                    <input type="number" />
                </p>
                <p>
                    Expiry Date
                    <input type="month" />
                </p>
                <p>
                    CSV:
                    <input type="number" />
                </p>
            </div>
        </div>
    );
}
export default Payment;

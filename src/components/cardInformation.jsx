

export default function CardInformation() {
    return (
        <div className="mb-5">
            <h4 class="mb-3">How would You Like To Pay?</h4>

            <div class="my-3">
                <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                    <label class="form-check-label" for="credit">Credit card</label>
                </div>
                <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                    <label class="form-check-label" for="debit">Debit card</label>
                </div>
                <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                    <label class="form-check-label" for="paypal">PayPal</label>
                </div>
            </div>

            <div class="row  w-50 "id="atm-info">
                <div class="col-md-6">
                    <label for="cc-name" class="form-label">Card Name</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="Enter Card Name" required />
                    <div class="invalid-feedback">
                        Name on card is required
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="cc-number" class="form-label">Card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="Enter Card Number" required />
                    <div class="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="cc-expiration" class="form-label">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="24/7" required />
                    <div class="invalid-feedback">
                        Expiration date required
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="..." required />
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>

        </div>
    )
}
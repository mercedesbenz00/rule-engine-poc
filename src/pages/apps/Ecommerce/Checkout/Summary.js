// flow
import React from 'react';

// Summary
const Summary = props => {
    const cart = props.cart || {};

    return (
        <React.Fragment>
            <div className="border p-3 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">Order Summary</h4>

                <div className="table-responsive">
                    <table className="table table-centered mb-0">
                        <tbody>
                            {cart.items.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                title="contact-img"
                                                className="rounded mr-2"
                                                height="48"
                                            />
                                            <p className="m-0 d-inline-block align-middle">
                                                <a
                                                    href="apps-ecommerce-products-details.html"
                                                    className="text-body font-weight-semibold">
                                                    {item.name}
                                                </a>
                                                <br />
                                                <small>
                                                    {item.qty} x ${item.price.toFixed(2)}
                                                </small>
                                            </p>
                                        </td>
                                        <td className="text-right">${item.total.toFixed(2)}</td>
                                    </tr>
                                );
                            })}

                            <tr className="text-right">
                                <td>
                                    <h6 className="m-0">Sub Total:</h6>
                                </td>
                                <td className="text-right">${cart.sub_total.toFixed(2)}</td>
                            </tr>
                            <tr className="text-right">
                                <td>
                                    <h6 className="m-0">Shipping:</h6>
                                </td>
                                <td className="text-right">
                                    {cart.shipping ? '$' + cart.shipping.toFixed(2) : 'FREE'}
                                </td>
                            </tr>
                            <tr className="text-right">
                                <td>
                                    <h5 className="m-0">Total:</h5>
                                </td>
                                <td className="text-right font-weight-semibold">${cart.total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Summary;

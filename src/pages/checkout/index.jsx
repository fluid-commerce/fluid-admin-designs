import { useState } from "react";

import ApplePay from "../../images/svgs/brands/apple-pay.svg";
import GooglePay from "../../images/svgs/brands/GooglePay.svg";
import PayPal from "../../images/svgs/brands/payl001_paypal 1.svg";
import LockIcon from "../../images/svgs/regular/lock.svg";
import ChevronDown from "../../images/svgs/regular/chevron-down.svg";
import ChevronUp from "../../images/svgs/regular/chevron-up.svg";
import RenderIcon from "../../components/global/RenderIcon";
import AmazonPay from "../../images/svgs/brands/amazon-pay.svg";
import FluidPay from "../../images/svgs/brands/FluidPay.svg";
import FluidPayLogoDark from "../../images/svgs/brands/FluidPayLogoDark.svg";
import FluidPayBGGradient from "../../images/svgs/brands/BackgroungGradientShape.png";
import AmazonLogo from "../../images/svgs/brands/amazon.svg";
import VerticalEllipsis from "../../images/svgs/regular/ellipsis-vertical.svg";
import TagIcon from "../../images/svgs/regular/tag.svg";
import { div, p } from "framer-motion/client";

const subtotal = "$210.00";
const discount = { code: "CHEAPSKATE", amount: "$24.00" };
const taxes = "$23.68";
const shipping = "$22.00";
const total = "$341.68";
const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 2,
    name: "Travel Duffel",
    href: "#",
    price: "$120.00",
    color: "Black",
    size: "30L",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-04-product-02.jpg",
    imageAlt:
      "Black canvas travel duffel with double top zipper, front pouch, and matching carry handle and shoulder strap.",
  },
  {
    id: 3,
    name: "Compact Wallet",
    href: "#",
    price: "$40.00",
    color: "Brown",
    size: "One Size",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-04-product-03.jpg",
    imageAlt:
      "Brown leather compact wallet with snap closure and multiple card slots.",
  },
  // More products...
];

export default function Example() {
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [showLogin, setShowLogin] = useState(false);
  const [discountApplied, setDiscountApplied] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard-shipping");
  const [showShippingOptions, setShowShippingOptions] = useState(true);
  const [showShippingMethodOptions, setShowShippingMethodOptions] =
    useState(false);
  const [showPaymentMethodOptions, setShowPaymentMethodOptions] =
    useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <main>
        <div className="flex flex-col md:grid md:grid-cols-8">
          {/* Checkout form */}

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="flex flex-col items-center bg-gray-50 h-full px-10 md:px-2 pb-12 w-full md:col-span-4"
          >
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>
            <div className="flex flex-col md:max-w-md md:ml-auto w-full">
              <ul
                role="list"
                className="flex-auto overflow-y-auto md:px-6 w-full"
              >
                <div className="pt-10 w-full flex flex-row justify-between items-center">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://logos-world.net/wp-content/uploads/2024/07/Vuori-Logo.jpg"
                      className="h-14 w-auto"
                    />
                  </a>
                  <div>
                    <label htmlFor="language" className="sr-only">
                      Select Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      className="inputText text-sm py-2 px-3 pr-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                </div>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center space-x-6 py-6"
                  >
                    <div className="flex flex-row space-x-6">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="size-20 flex-none rounded bg-gray-200 object-cover object-center"
                      />
                      <div className="flex flex-col justify-between items-center space-y-4">
                        <div className="text-sm font-medium">
                          <h3 className="text-gray-900 ">{product.name}</h3>
                          <p className="text-gray-500">{product.color}</p>
                          {discountApplied && (
                            <div className="flex flex-row space-x-1 items-center">
                              <p className="text-xs text-gray-500 line-through">
                                {product.price}
                              </p>
                              <p className="text-gray-900">$50.00</p>
                            </div>
                          )}
                          {!discountApplied && (
                            <p className="text-gray-900">{product.price}</p>
                          )}
                          {discountApplied && (
                            <div className="mt-2 inline-flex items-center space-x-1 rounded-full bg-gray-200 py-0.5 px-2 text-xs tracking-wide text-gray-500">
                              <RenderIcon path={TagIcon} size={"w-3"} />
                              <span className="text-gray-900">
                                {discountApplied}
                              </span>
                            </div>
                          )}
                          {/* <p className="text-gray-500">{product.size}</p> */}
                        </div>
                        {/* <div className="flex space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 h-7.5 shadow-lg bg-gray-200 rounded-2xl">
                      <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm text-gray-600 hover:text-gray-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                      <span className="text-sm font-semibold text-gray-900">
                        1
                      </span>
                      <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm text-gray-600 hover:text-gray-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex-none bg-gray-50 md:px-6 w-full">
                <div className="flex flex-row space-x-2">
                  <div
                    className="relative w-full"
                    onClick={() =>
                      document.getElementById("discount-code").focus()
                    }
                  >
                    <input
                      type="text"
                      id="discount-code"
                      className="inputText text-sm bg-gray-100 pt-5 peer rounded w-full border-0 ring-b-0 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      onBlur={(e) => {
                        if (e.target.value) {
                          e.target.nextElementSibling.classList.add("top-1/4");
                          e.target.nextElementSibling.classList.add("text-xs");
                        }
                      }}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                      Discount Code
                    </span>
                  </div>
                  <button
                    className="text-sm text-white font-semibold bg-gray-500 opacity-90 rounded border px-4 py-2 hover:bg-gray-800"
                    onClick={() => {
                      const discountCode =
                        document.getElementById("discount-code").value;
                      setDiscountApplied(discountCode);
                    }}
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <div className="mt-2 inline-flex items-center space-x-1 rounded-full bg-gray-200 py-0.5 px-2 text-xs tracking-wide text-gray-500">
                    <RenderIcon path={TagIcon} size={"w-3"} />
                    <span className="text-gray-900">{discountApplied}</span>
                    <button
                      className="text-gray-900"
                      onClick={() => setDiscountApplied("")}
                    >
                      X
                    </button>
                  </div>
                )}
                <dl className="mt-5 space-y-2 text-sm font-medium text-gray-500">
                  {/* <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">{subtotal}</dd>
                  </div> */}
                  {discountApplied && (
                    <div className="flex justify-between">
                      <dt className="flex">
                        Discount
                        <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-500">
                          {discountApplied}
                        </span>
                      </dt>
                      <dd className="text-gray-500">-{discount.amount}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-gray-500">{taxes}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-gray-500">{shipping}</dd>
                  </div>
                  <div className="flex items-center justify-between pt-3 text-gray-900">
                    <dt className="text-gray-500">Total</dt>
                    <dd className="text-base font-bold">{total}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="payment-heading"
            className="col-span-4 flex-auto px-8 pb-16 pt-0 overflow-y-auto md:h-screen"
          >
            <div className="max-w-lg mx-auto md:mx-0 md:mr-auto">
              {paymentMethod !== "fluid-pay" && !showLogin ? (
                <>
                  <div className="text-xs text-gray-400 mt-4 text-center">
                    Fast checkout
                  </div>
                  <div className="flex flex-row space-x-2 justify-between items-center mt-4">
                    <button
                      type="button"
                      className="relative flex-1 bg-gray-800 h-[48px] font-custom flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-900"
                      onClick={() => setPaymentMethod("fluid-pay")}
                    >
                      <span className="sr-only">Pay with Fluid Pay</span>
                      <div className="absolute inset-0">
                        <img
                          src={FluidPayBGGradient}
                          alt="Fluid Pay Background Gradient"
                          className="w-full h-full object-cover rounded z-10"
                        />
                      </div>
                      <RenderIcon
                        path={FluidPay}
                        size={"z-40"}
                        type={"save-icons"}
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-white h-[48px] ring-1 ring-gray-300 flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-50"
                    >
                      <span className="sr-only">Pay with Apple Pay</span>
                      <RenderIcon
                        path={ApplePay}
                        size={"w-10"}
                        type={"save-icons"}
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-gray-800 h-[48px] flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-900"
                    >
                      <span className="sr-only">Pay with Google Pay</span>
                      <RenderIcon
                        path={GooglePay}
                        // size={"w-12"}
                        type={"save-icons"}
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-yellow-300 h-[48px] flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-yellow-400"
                    >
                      <span className="sr-only">Pay with Amazon Pay</span>
                      <RenderIcon
                        path={AmazonPay}
                        size={"w-10"}
                        type={"black"}
                      />
                    </button>
                  </div>
                  {showMoreOptions && (
                    <div className="flex flex-row max-w-xs mx-auto space-x-2 justify-center items-center mt-4">
                      <button
                        type="button"
                        className="flex-1 bg-yellow-200 h-10 flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-yellow-300"
                      >
                        <span className="sr-only">Pay with Amazon Pay</span>
                        <RenderIcon
                          path={AmazonPay}
                          size={"w-10"}
                          type={"save-icons"}
                        />
                      </button>
                      <button
                        type="button"
                        className="flex-1 bg-yellow-300 h-10 flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-yellow-400"
                      >
                        <span className="sr-only">Pay with PayPal</span>
                        <RenderIcon
                          path={PayPal}
                          size={"pt-1 pl-2"}
                          type={"save-icons"}
                        />
                      </button>
                    </div>
                  )}
                  {/* <div
                    className="flex flex-row justify-center items-center space-x-1 items-center mt-4 cursor-pointer"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                  >
                    <div className="text-xs text-gray-500 text-center">
                      {showMoreOptions
                        ? "Hide more options"
                        : "Show more options"}
                    </div>
                    <RenderIcon
                      path={showMoreOptions ? ChevronUp : ChevronDown}
                      size={"w-2.5"}
                      type={"black-icons"}
                    />
                  </div> */}

                  <div className="relative mt-8">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center"
                    >
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-sm font-medium text-gray-500">
                        or
                      </span>
                    </div>
                  </div>
                  <div>
                    <fieldset className="mt-4">
                      <div className="flex flex-row justify-between items-center">
                        <legend className="block text-sm/6 font-medium text-gray-900">
                          Contact
                        </legend>
                        <button
                          type="button"
                          className="text-sm/6 font-medium text-gray-900 underline"
                          onClick={() => setShowLogin(true)}
                        >
                          Log in
                        </button>
                      </div>
                      <div className="mt-2 -space-y-px rounded bg-white shadow-sm">
                        <div
                          className="relative w-full"
                          onClick={() =>
                            document.getElementById("email").focus()
                          }
                        >
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onBlur={(e) => {
                              if (e.target.value) {
                                e.target.nextElementSibling.classList.add(
                                  "top-1/4"
                                );
                                e.target.nextElementSibling.classList.add(
                                  "text-xs"
                                );
                              }
                            }}
                            className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                            Email
                          </span>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="mt-6 bg-white">
                      <legend className="block text-sm/6 font-medium text-gray-900">
                        Shipping address
                      </legend>
                      <div className="mt-2 -space-y-px rounded shadow-sm">
                        <div className="flex-1 relative w-full">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <input
                            id="country"
                            name="country"
                            type="text"
                            autoComplete="on"
                            onFocus={(e) => {
                              e.target.nextElementSibling.classList.remove(
                                "hidden"
                              );
                              e.target.classList.remove("py-3");
                              e.target.classList.add("pt-4");
                              e.target.nextElementSibling.classList.add(
                                "top-1/4"
                              );
                            }}
                            onBlur={(e) => {
                              setTimeout(() => {
                                e.target.nextElementSibling.classList.add(
                                  "hidden"
                                );
                              }, 200);
                              if (e.target.value) {
                                document
                                  .getElementById("country-label")
                                  .classList.add("top-1/4");
                                document
                                  .getElementById("country-label")
                                  .classList.add("text-xs");
                              }
                            }}
                            onChange={(e) => {
                              const filter = e.target.value.toLowerCase();
                              const options =
                                e.target.nextElementSibling.children;
                              for (let i = 0; i < options.length; i++) {
                                const option = options[i];
                                const text =
                                  option.textContent || option.innerText;
                                option.style.display = text
                                  .toLowerCase()
                                  .includes(filter)
                                  ? ""
                                  : "none";
                              }
                            }}
                            className="inputText text-sm pt-5 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <ul className="absolute left-0 text-sm z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                              United States
                            </li>
                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                              Canada
                            </li>
                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                              Mexico
                            </li>
                          </ul>
                          <span
                            id="country-label"
                            className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                          >
                            Country
                          </span>
                        </div>
                        <div
                          className="relative w-full"
                          onClick={() =>
                            document.getElementById("full-name").focus()
                          }
                        >
                          <label htmlFor="full-name" className="sr-only">
                            Full Name
                          </label>
                          <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="name"
                            onBlur={(e) => {
                              if (e.target.value) {
                                e.target.nextElementSibling.classList.add(
                                  "top-1/4"
                                );
                                e.target.nextElementSibling.classList.add(
                                  "text-xs"
                                );
                              }
                            }}
                            className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                            Full Name
                          </span>
                        </div>
                        <div className="flex -space-x-px">
                          <div
                            className="flex-1 relative w-full"
                            onClick={() =>
                              document.getElementById("address-line-1").focus()
                            }
                          >
                            <label htmlFor="address-line-1" className="sr-only">
                              Address Line 1
                            </label>
                            <input
                              id="address-line-1"
                              name="address-line-1"
                              type="text"
                              autoComplete="address-line1"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              Address Line 1
                            </span>
                          </div>
                          <div
                            className="flex-1 relative w-full"
                            onClick={() =>
                              document.getElementById("address-line-2").focus()
                            }
                          >
                            <label htmlFor="address-line-2" className="sr-only">
                              Address Line 2
                            </label>
                            <input
                              id="address-line-2"
                              name="address-line-2"
                              type="text"
                              autoComplete="address-line2"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              Address Line 2
                            </span>
                          </div>
                        </div>
                        <div className="flex -space-x-px">
                          <div
                            className="flex-1 relative w-full"
                            onClick={() =>
                              document.getElementById("city").focus()
                            }
                          >
                            <label htmlFor="city" className="sr-only">
                              City
                            </label>
                            <input
                              id="city"
                              name="city"
                              type="text"
                              autoComplete="address-level2"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer rounded-bl w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              City
                            </span>
                          </div>
                          <div className="flex-1 relative w-full">
                            <label htmlFor="state" className="sr-only">
                              State
                            </label>
                            <input
                              id="state"
                              name="state"
                              type="text"
                              autoComplete="on"
                              onFocus={(e) => {
                                e.target.nextElementSibling.classList.remove(
                                  "hidden"
                                );
                                e.target.classList.remove("py-3");
                                e.target.classList.add("pt-4");
                                e.target.nextElementSibling.classList.add(
                                  "top-1/4"
                                );
                              }}
                              onBlur={(e) => {
                                setTimeout(() => {
                                  e.target.nextElementSibling.classList.add(
                                    "hidden"
                                  );
                                }, 200);
                                if (e.target.value) {
                                  document
                                    .getElementById("state-label")
                                    .classList.add("top-1/4");
                                  document
                                    .getElementById("state-label")
                                    .classList.add("text-xs");
                                }
                              }}
                              onChange={(e) => {
                                const filter = e.target.value.toLowerCase();
                                const options =
                                  e.target.nextElementSibling.children;
                                for (let i = 0; i < options.length; i++) {
                                  const option = options[i];
                                  const text =
                                    option.textContent || option.innerText;
                                  option.style.display = text
                                    .toLowerCase()
                                    .includes(filter)
                                    ? ""
                                    : "none";
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <ul className="absolute left-0 text-sm z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                Utah
                              </li>
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                California
                              </li>
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                New York
                              </li>
                            </ul>
                            <span
                              id="state-label"
                              className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                            >
                              State
                            </span>
                          </div>
                          <div
                            className="relative"
                            onClick={() =>
                              document.getElementById("postal-code").focus()
                            }
                          >
                            <label htmlFor="postal-code" className="sr-only">
                              ZIP / Postal code
                            </label>
                            <input
                              id="postal-code"
                              name="postal-code"
                              type="text"
                              autoComplete="postal-code"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded-br focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              ZIP / Postal code
                            </span>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="mt-6">
                      <legend className="block text-sm/6 font-medium text-gray-900">
                        Shipping method
                      </legend>
                      <div className="mt-2 flex flex-col space-y-4">
                        <div
                          className={`flex ${
                            shippingMethod === "standard-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "standard-shipping"
                            ).checked = true;
                            setShippingMethod("standard-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="standard-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                              defaultChecked
                            />
                            <div className="text-sm">
                              Standard shipping - 3-5 business days
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            FREE
                          </div>
                        </div>
                        <div
                          className={`flex ${
                            shippingMethod === "express-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "express-shipping"
                            ).checked = true;
                            setShippingMethod("express-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="express-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                            />
                            <div className="text-sm">
                              Express shipping - 2-3 business days
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            $8.98
                          </div>
                        </div>
                        <div
                          className={`flex ${
                            shippingMethod === "overnight-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "overnight-shipping"
                            ).checked = true;
                            setShippingMethod("overnight-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="overnight-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                            />
                            <div className="text-sm">
                              Overnight shipping - 1 business day
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            $29.98
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="mt-6">
                      <div className="flex flex-row justify-between">
                        <div className="text-sm/6 font-medium text-gray-900">
                          Payment
                        </div>
                        <div className="text-xs text-gray-500">
                          All transactions are secure and encrypted.
                        </div>
                      </div>
                      <div className="mt-2 -space-y-px rounded bg-white shadow-sm">
                        <div
                          className={`flex bg-gray-50 flex-row justify-between items-center space-x-2 w-full h-[48px] px-2 border border-gray-300 cursor-pointer ${
                            paymentMethod === "credit-card"
                              ? "border-b-0 rounded-t"
                              : "rounded opacity-60"
                          }`}
                          onClick={() => setPaymentMethod("credit-card")}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="credit-card"
                              name="credit-card"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                              checked={paymentMethod === "credit-card"}
                            />
                            <div className="text-sm">Credit card</div>
                          </div>
                          <div className="flex flex-row space-x-1">
                            <img
                              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                              alt="visa"
                            />
                            <img
                              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg"
                              alt="mastercard"
                            />
                            <img
                              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg"
                              alt="amex"
                            />
                          </div>
                        </div>
                      </div>
                      {paymentMethod === "credit-card" && (
                        <div className="-space-y-px rounded bg-white shadow-sm">
                          <div
                            className="relative w-full"
                            onClick={() =>
                              document.getElementById("card-number").focus()
                            }
                          >
                            <input
                              type="text"
                              id="card-number"
                              className="inputText text-sm pt-5 peer w-full border-0 ring-t-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <RenderIcon
                                path={LockIcon}
                                size={"w-3"}
                                type={"black-icons"}
                              />
                            </div>
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              Card number
                            </span>
                          </div>
                          <div className="flex -space-x-px">
                            <div
                              className="w-1/2 min-w-0 flex-1 relative"
                              onClick={() =>
                                document
                                  .getElementById("card-expiration-date")
                                  .focus()
                              }
                            >
                              <input
                                id="card-expiration-date"
                                name="card-expiration-date"
                                type="text"
                                className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                MM / YY
                              </span>
                            </div>
                            <div
                              className="min-w-0 flex-1 relative"
                              onClick={() =>
                                document.getElementById("card-cvc").focus()
                              }
                            >
                              <input
                                id="card-cvc"
                                name="card-cvc"
                                type="text"
                                className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                CVC
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative w-full"
                            onClick={() =>
                              document.getElementById("card-name").focus()
                            }
                          >
                            <label htmlFor="card-name" className="sr-only">
                              Name on card
                            </label>
                            <input
                              id="card-name"
                              name="card-name"
                              type="text"
                              autoComplete="name"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              Name on card
                            </span>
                          </div>

                          <div
                            className={`p-2 mt-3 relative flex items-center border border-gray-300 h-[48px] ${
                              !showBillingAddress ? "rounded-b" : ""
                            }`}
                          >
                            <div className="flex items-center h-5">
                              <input
                                id="billing-address"
                                name="billing-address"
                                type="checkbox"
                                defaultChecked={!showBillingAddress}
                                onChange={() =>
                                  setShowBillingAddress(!showBillingAddress)
                                }
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-xs">
                              <label
                                htmlFor="billing-address"
                                className="font-medium text-gray-700"
                              >
                                Use shipping address as billing address
                              </label>
                            </div>
                          </div>

                          {showBillingAddress && (
                            <fieldset className="bg-white">
                              <div className="w-full flex items-center h-[48px] bg-gray-50 border-l border-r border-gray-300">
                                <div className="ml-2 text-sm">
                                  Billing Address
                                </div>
                              </div>
                              <div className="-space-y-px rounded shadow-sm">
                                <div className="flex-1 relative w-full">
                                  <label
                                    htmlFor="country-billing"
                                    className="sr-only"
                                  >
                                    Country
                                  </label>
                                  <input
                                    id="country-billing"
                                    name="country-billing"
                                    type="text"
                                    autoComplete="on"
                                    onFocus={(e) => {
                                      e.target.nextElementSibling.classList.remove(
                                        "hidden"
                                      );
                                      e.target.classList.remove("py-3");
                                      e.target.classList.add("pt-4");
                                      e.target.nextElementSibling.classList.add(
                                        "top-1/4"
                                      );
                                    }}
                                    onBlur={(e) => {
                                      setTimeout(() => {
                                        e.target.nextElementSibling.classList.add(
                                          "hidden"
                                        );
                                      }, 200);
                                      if (e.target.value) {
                                        document
                                          .getElementById(
                                            "country-label-billing"
                                          )
                                          .classList.add("top-1/4");
                                        document
                                          .getElementById(
                                            "country-label-billing"
                                          )
                                          .classList.add("text-xs");
                                      }
                                    }}
                                    onChange={(e) => {
                                      const filter =
                                        e.target.value.toLowerCase();
                                      const options =
                                        e.target.nextElementSibling.children;
                                      for (let i = 0; i < options.length; i++) {
                                        const option = options[i];
                                        const text =
                                          option.textContent ||
                                          option.innerText;
                                        option.style.display = text
                                          .toLowerCase()
                                          .includes(filter)
                                          ? ""
                                          : "none";
                                      }
                                    }}
                                    className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                  />
                                  <ul className="absolute left-0 z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                      United States
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                      Canada
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                      Mexico
                                    </li>
                                  </ul>
                                  <span
                                    id="country-label-billing"
                                    className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                                  >
                                    Country
                                  </span>
                                </div>
                                <div
                                  className="relative w-full"
                                  onClick={() =>
                                    document
                                      .getElementById("full-name-billing")
                                      .focus()
                                  }
                                >
                                  <label
                                    htmlFor="full-name-billing"
                                    className="sr-only"
                                  >
                                    Full Name
                                  </label>
                                  <input
                                    id="full-name-billing"
                                    name="full-name-billing"
                                    type="text"
                                    autoComplete="name"
                                    onBlur={(e) => {
                                      if (e.target.value) {
                                        e.target.nextElementSibling.classList.add(
                                          "top-1/4"
                                        );
                                        e.target.nextElementSibling.classList.add(
                                          "text-xs"
                                        );
                                      }
                                    }}
                                    className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                  />
                                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                    Full Name
                                  </span>
                                </div>
                                <div className="flex -space-x-px">
                                  <div
                                    className="flex-1 relative w-full"
                                    onClick={() =>
                                      document
                                        .getElementById(
                                          "address-line-1-billing"
                                        )
                                        .focus()
                                    }
                                  >
                                    <label
                                      htmlFor="address-line-1-billing"
                                      className="sr-only"
                                    >
                                      Address Line 1
                                    </label>
                                    <input
                                      id="address-line-1-billing"
                                      name="address-line-1-billing"
                                      type="text"
                                      autoComplete="address-line1"
                                      onBlur={(e) => {
                                        if (e.target.value) {
                                          e.target.nextElementSibling.classList.add(
                                            "top-1/4"
                                          );
                                          e.target.nextElementSibling.classList.add(
                                            "text-xs"
                                          );
                                        }
                                      }}
                                      className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    />
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                      Address Line 1
                                    </span>
                                  </div>
                                  <div
                                    className="flex-1 relative w-full"
                                    onClick={() =>
                                      document
                                        .getElementById(
                                          "address-line-2-billing"
                                        )
                                        .focus()
                                    }
                                  >
                                    <label
                                      htmlFor="address-line-2-billing"
                                      className="sr-only"
                                    >
                                      Address Line 2
                                    </label>
                                    <input
                                      id="address-line-2-billing"
                                      name="address-line-2-billing"
                                      type="text"
                                      autoComplete="address-line2"
                                      onBlur={(e) => {
                                        if (e.target.value) {
                                          e.target.nextElementSibling.classList.add(
                                            "top-1/4"
                                          );
                                          e.target.nextElementSibling.classList.add(
                                            "text-xs"
                                          );
                                        }
                                      }}
                                      className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    />
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                      Address Line 2
                                    </span>
                                  </div>
                                </div>
                                <div className="flex -space-x-px">
                                  <div
                                    className="flex-1 relative w-full"
                                    onClick={() =>
                                      document
                                        .getElementById("city-billing")
                                        .focus()
                                    }
                                  >
                                    <label
                                      htmlFor="city-billing"
                                      className="sr-only"
                                    >
                                      City
                                    </label>
                                    <input
                                      id="city-billing"
                                      name="city-billing"
                                      type="text"
                                      autoComplete="address-level2"
                                      onBlur={(e) => {
                                        if (e.target.value) {
                                          e.target.nextElementSibling.classList.add(
                                            "top-1/4"
                                          );
                                          e.target.nextElementSibling.classList.add(
                                            "text-xs"
                                          );
                                        }
                                      }}
                                      className="inputText text-sm pt-5 peer w-full rounded-bl border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    />
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                      City
                                    </span>
                                  </div>
                                  <div className="flex-1 relative w-full">
                                    <label
                                      htmlFor="state-billing"
                                      className="sr-only"
                                    >
                                      State
                                    </label>
                                    <input
                                      id="state-billing"
                                      name="state-billing"
                                      type="text"
                                      autoComplete="on"
                                      onFocus={(e) => {
                                        e.target.nextElementSibling.classList.remove(
                                          "hidden"
                                        );
                                        e.target.classList.remove("py-3");
                                        e.target.classList.add("pt-5");
                                        e.target.nextElementSibling.classList.add(
                                          "top-1/4"
                                        );
                                      }}
                                      onBlur={(e) => {
                                        setTimeout(() => {
                                          e.target.nextElementSibling.classList.add(
                                            "hidden"
                                          );
                                        }, 200);
                                        if (e.target.value) {
                                          document
                                            .getElementById(
                                              "state-label-billing"
                                            )
                                            .classList.add("top-1/4");
                                          document
                                            .getElementById(
                                              "state-label-billing"
                                            )
                                            .classList.add("text-xs");
                                        }
                                      }}
                                      onChange={(e) => {
                                        const filter =
                                          e.target.value.toLowerCase();
                                        const options =
                                          e.target.nextElementSibling.children;
                                        for (
                                          let i = 0;
                                          i < options.length;
                                          i++
                                        ) {
                                          const option = options[i];
                                          const text =
                                            option.textContent ||
                                            option.innerText;
                                          option.style.display = text
                                            .toLowerCase()
                                            .includes(filter)
                                            ? ""
                                            : "none";
                                        }
                                      }}
                                      className="inputText text-sm pt-5 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    />
                                    <ul className="absolute left-0 text-sm z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                        Utah
                                      </li>
                                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                        California
                                      </li>
                                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                        New York
                                      </li>
                                    </ul>
                                    <span
                                      id="state-label-billing"
                                      className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                                    >
                                      State
                                    </span>
                                  </div>
                                  <div
                                    className="relative"
                                    onClick={() =>
                                      document
                                        .getElementById("postal-code-billing")
                                        .focus()
                                    }
                                  >
                                    <label
                                      htmlFor="postal-code-billing"
                                      className="sr-only"
                                    >
                                      ZIP / Postal code
                                    </label>
                                    <input
                                      id="postal-code-billing"
                                      name="postal-code-billing"
                                      type="text"
                                      autoComplete="postal-code"
                                      onBlur={(e) => {
                                        if (e.target.value) {
                                          e.target.nextElementSibling.classList.add(
                                            "top-1/4"
                                          );
                                          e.target.nextElementSibling.classList.add(
                                            "text-xs"
                                          );
                                        }
                                      }}
                                      className="inputText text-sm pt-5 peer rounded-br w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    />
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                      ZIP / Postal code
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          )}
                        </div>
                      )}
                      <div className="mt-4 -space-y-px rounded bg-white shadow-sm">
                        <div
                          className={`flex bg-gray-50 flex-row items-center justify-between space-x-2 w-full h-[48px] px-2 border border-gray-300 cursor-pointer ${
                            paymentMethod === "paypal"
                              ? "border-b-0 rounded-t"
                              : "rounded opacity-60"
                          }`}
                          onClick={() => setPaymentMethod("paypal")}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="paypal"
                              name="paypal"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                              checked={paymentMethod === "paypal"}
                            />
                            <div className="text-sm">PayPal</div>
                          </div>
                          <RenderIcon
                            path={PayPal}
                            size={"pt-1 pl-2"}
                            type={"save-icons"}
                          />
                        </div>
                      </div>
                      {paymentMethod === "paypal" && (
                        <div className="flex flex-row items-center justify-between rounded-b py-4 space-x-2 w-full px-2 border border-gray-300 cursor-pointer">
                          <div className="text-sm text-center text-gray-500">
                            After clicking "Pay with PayPal", you will be
                            redirected to PayPal's website to complete your
                            payment.
                          </div>
                        </div>
                      )}
                      <div className="mt-4 -space-y-px rounded bg-white shadow-sm">
                        <div
                          className={`flex bg-gray-50 flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer ${
                            paymentMethod === "cod"
                              ? "opacity-100"
                              : "opacity-60"
                          }`}
                          onClick={() => setPaymentMethod("cod")}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="paypal"
                              name="paypal"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                              checked={paymentMethod === "cod"}
                            />
                            <div className="text-sm">Cash on Deliver (COD)</div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-3 relative flex items-center">
                        <div className="flex items-center h-5">
                          <input
                            id="billing-address"
                            name="billing-address"
                            type="checkbox"
                            defaultChecked={!showBillingAddress}
                            onChange={() =>
                              setShowBillingAddress(!showBillingAddress)
                            }
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-xs">
                          <label
                            htmlFor="billing-address"
                            className="font-medium text-gray-700"
                          >
                            Use shipping address as billing address
                          </label>
                        </div>
                      </div> */}
                    </fieldset>
                    {/* {showBillingAddress && (
                      <fieldset className="mt-6 bg-white">
                        <legend className="block text-sm/6 font-medium text-gray-900">
                          Billing address
                        </legend>
                        <div className="mt-2 -space-y-px rounded shadow-sm">
                          <div className="flex-1 relative w-full">
                            <label
                              htmlFor="country-billing"
                              className="sr-only"
                            >
                              Country
                            </label>
                            <input
                              id="country-billing"
                              name="country-billing"
                              type="text"
                              autoComplete="on"
                              onFocus={(e) => {
                                e.target.nextElementSibling.classList.remove(
                                  "hidden"
                                );
                                e.target.classList.remove("py-3");
                                e.target.classList.add("pt-4");
                                e.target.nextElementSibling.classList.add(
                                  "top-1/4"
                                );
                              }}
                              onBlur={(e) => {
                                setTimeout(() => {
                                  e.target.nextElementSibling.classList.add(
                                    "hidden"
                                  );
                                }, 200);
                                if (e.target.value) {
                                  document
                                    .getElementById("country-label-billing")
                                    .classList.add("top-1/4");
                                  document
                                    .getElementById("country-label-billing")
                                    .classList.add("text-xs");
                                }
                              }}
                              onChange={(e) => {
                                const filter = e.target.value.toLowerCase();
                                const options =
                                  e.target.nextElementSibling.children;
                                for (let i = 0; i < options.length; i++) {
                                  const option = options[i];
                                  const text =
                                    option.textContent || option.innerText;
                                  option.style.display = text
                                    .toLowerCase()
                                    .includes(filter)
                                    ? ""
                                    : "none";
                                }
                              }}
                              className="inputText text-sm pt-5 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <ul className="absolute left-0 z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                United States
                              </li>
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                Canada
                              </li>
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                Mexico
                              </li>
                            </ul>
                            <span
                              id="country-label-billing"
                              className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                            >
                              Country
                            </span>
                          </div>
                          <div
                            className="relative w-full"
                            onClick={() =>
                              document
                                .getElementById("full-name-billing")
                                .focus()
                            }
                          >
                            <label
                              htmlFor="full-name-billing"
                              className="sr-only"
                            >
                              Full Name
                            </label>
                            <input
                              id="full-name-billing"
                              name="full-name-billing"
                              type="text"
                              autoComplete="name"
                              onBlur={(e) => {
                                if (e.target.value) {
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                  e.target.nextElementSibling.classList.add(
                                    "text-xs"
                                  );
                                }
                              }}
                              className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                              Full Name
                            </span>
                          </div>
                          <div className="flex -space-x-px">
                            <div
                              className="flex-1 relative w-full"
                              onClick={() =>
                                document
                                  .getElementById("address-line-1-billing")
                                  .focus()
                              }
                            >
                              <label
                                htmlFor="address-line-1-billing"
                                className="sr-only"
                              >
                                Address Line 1
                              </label>
                              <input
                                id="address-line-1-billing"
                                name="address-line-1-billing"
                                type="text"
                                autoComplete="address-line1"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                                className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                Address Line 1
                              </span>
                            </div>
                            <div
                              className="flex-1 relative w-full"
                              onClick={() =>
                                document
                                  .getElementById("address-line-2-billing")
                                  .focus()
                              }
                            >
                              <label
                                htmlFor="address-line-2-billing"
                                className="sr-only"
                              >
                                Address Line 2
                              </label>
                              <input
                                id="address-line-2-billing"
                                name="address-line-2-billing"
                                type="text"
                                autoComplete="address-line2"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                                className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                Address Line 2
                              </span>
                            </div>
                          </div>
                          <div className="flex -space-x-px">
                            <div
                              className="flex-1 relative w-full"
                              onClick={() =>
                                document.getElementById("city-billing").focus()
                              }
                            >
                              <label htmlFor="city-billing" className="sr-only">
                                City
                              </label>
                              <input
                                id="city-billing"
                                name="city-billing"
                                type="text"
                                autoComplete="address-level2"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                                className="inputText text-sm pt-5 peer w-full rounded-bl border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                City
                              </span>
                            </div>
                            <div className="flex-1 relative w-full">
                              <label
                                htmlFor="state-billing"
                                className="sr-only"
                              >
                                State
                              </label>
                              <input
                                id="state-billing"
                                name="state-billing"
                                type="text"
                                autoComplete="on"
                                onFocus={(e) => {
                                  e.target.nextElementSibling.classList.remove(
                                    "hidden"
                                  );
                                  e.target.classList.remove("py-3");
                                  e.target.classList.add("pt-5");
                                  e.target.nextElementSibling.classList.add(
                                    "top-1/4"
                                  );
                                }}
                                onBlur={(e) => {
                                  setTimeout(() => {
                                    e.target.nextElementSibling.classList.add(
                                      "hidden"
                                    );
                                  }, 200);
                                  if (e.target.value) {
                                    document
                                      .getElementById("state-label-billing")
                                      .classList.add("top-1/4");
                                    document
                                      .getElementById("state-label-billing")
                                      .classList.add("text-xs");
                                  }
                                }}
                                onChange={(e) => {
                                  const filter = e.target.value.toLowerCase();
                                  const options =
                                    e.target.nextElementSibling.children;
                                  for (let i = 0; i < options.length; i++) {
                                    const option = options[i];
                                    const text =
                                      option.textContent || option.innerText;
                                    option.style.display = text
                                      .toLowerCase()
                                      .includes(filter)
                                      ? ""
                                      : "none";
                                  }
                                }}
                                className="inputText text-sm pt-5 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <ul className="absolute left-0 text-sm z-50 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                  Utah
                                </li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                  California
                                </li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                  New York
                                </li>
                              </ul>
                              <span
                                id="state-label-billing"
                                className="absolute left-3 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-sm text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                              >
                                State
                              </span>
                            </div>
                            <div
                              className="relative"
                              onClick={() =>
                                document
                                  .getElementById("postal-code-billing")
                                  .focus()
                              }
                            >
                              <label
                                htmlFor="postal-code-billing"
                                className="sr-only"
                              >
                                ZIP / Postal code
                              </label>
                              <input
                                id="postal-code-billing"
                                name="postal-code-billing"
                                type="text"
                                autoComplete="postal-code"
                                onBlur={(e) => {
                                  if (e.target.value) {
                                    e.target.nextElementSibling.classList.add(
                                      "top-1/4"
                                    );
                                    e.target.nextElementSibling.classList.add(
                                      "text-xs"
                                    );
                                  }
                                }}
                                className="inputText text-sm pt-5 peer rounded-br w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                                ZIP / Postal code
                              </span>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    )} */}
                  </div>
                  <button className="mt-6 w-full font-semibold bg-indigo-600 rounded px-6 py-2 text-white h-[48px]">
                    {paymentMethod === "paypal"
                      ? "Pay with PayPal"
                      : paymentMethod === "cod"
                      ? "Pay on delivery"
                      : "Pay now"}
                  </button>
                </>
              ) : showLogin ? (
                <>
                  <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4 mt-12">
                    <div className="flex flex-col">
                      <RenderIcon path={FluidPayLogoDark} size={"w-10"} />
                      <div className="text-sm text-gray-900 font-medium">
                        felipe@gmail.com
                      </div>
                    </div>
                    <button className="hover:bg-gray-50 rounded px-2 py-1">
                      <RenderIcon
                        path={VerticalEllipsis}
                        size={"w-1"}
                        type={"black"}
                      />
                    </button>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-xs text-gray-400 mt-4 mb-1">
                      Ship to
                    </div>
                    <button
                      className={`hover:bg-gray-50 rounded px-2 py-1 ${
                        showShippingOptions && "bg-gray-50"
                      }`}
                      onClick={() =>
                        setShowShippingOptions(!showShippingOptions)
                      }
                    >
                      <RenderIcon
                        path={showShippingOptions ? ChevronUp : ChevronDown}
                        size={"w-3"}
                        type={"nav"}
                      />
                    </button>
                  </div>
                  {showShippingOptions ? (
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-row justify-between bg-gray-50 rounded px-2 py-4">
                        <div className="flex flex-col justify-center">
                          <div className="text-sm text-gray-900 font-medium">
                            Felipe Lee, 123 S. 432 E.
                          </div>
                          <div className="text-sm text-gray-500">
                            Salt Lake City, UT 84103
                          </div>
                          <p className="flex items-center justify-center bg-gray-500 text-white text-xs font-medium rounded w-12 h-5">
                            Default
                          </p>
                        </div>
                        <button className="hover:bg-gray-50 rounded px-2 py-1">
                          <RenderIcon
                            path={VerticalEllipsis}
                            size={"w-1"}
                            type={"black"}
                          />
                        </button>
                      </div>
                      <button className="text-sm text-gray-900 my-2 text-left">
                        + Use a different address
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col w-full h-[48px] cursor-pointer"
                      onClick={() => setShowShippingOptions(true)}
                    >
                      <div className="text-sm text-gray-900 flex items-center font-medium">
                        Felipe Lee, 123 S. 432 E.
                      </div>
                      <div className="text-sm text-gray-500">
                        Salt Lake City, UT 84103
                      </div>
                    </div>
                  )}
                  <div className="border-b border-gray-300 mt-2"></div>
                  <fieldset>
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-xs text-gray-400 mt-4 mb-1">
                        Shipping method
                      </div>
                      <button
                        className={`hover:bg-gray-50 rounded px-2 py-1 ${
                          showShippingMethodOptions && "bg-gray-50"
                        }`}
                        onClick={() =>
                          setShowShippingMethodOptions(
                            !showShippingMethodOptions
                          )
                        }
                      >
                        <RenderIcon
                          path={
                            showShippingMethodOptions ? ChevronUp : ChevronDown
                          }
                          size={"w-3"}
                          type={"nav"}
                        />
                      </button>
                    </div>
                    {showShippingMethodOptions ? (
                      <div className="mt-2 flex flex-col space-y-4 border-b border-gray-300 pb-4">
                        <div
                          className={`flex ${
                            shippingMethod === "standard-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "standard-shipping"
                            ).checked = true;
                            setShippingMethod("standard-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="standard-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                              defaultChecked
                            />
                            <div className="text-sm">
                              Standard shipping - 3-5 business days
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            FREE
                          </div>
                        </div>
                        <div
                          className={`flex ${
                            shippingMethod === "express-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "express-shipping"
                            ).checked = true;
                            setShippingMethod("express-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="express-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                            />
                            <div className="text-sm">
                              Express shipping - 2-3 business days
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            $8.98
                          </div>
                        </div>
                        <div
                          className={`flex ${
                            shippingMethod === "overnight-shipping"
                              ? "bg-gray-50"
                              : "bg-gray-100 opacity-60"
                          } flex-row items-center justify-between space-x-2 w-full h-[48px] rounded px-2 border border-gray-300 cursor-pointer`}
                          onClick={() => {
                            document.getElementById(
                              "overnight-shipping"
                            ).checked = true;
                            setShippingMethod("overnight-shipping");
                          }}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <input
                              id="overnight-shipping"
                              name="shipping-method"
                              type="radio"
                              className="h-3 w-3 text-indigo-600"
                            />
                            <div className="text-sm">
                              Overnight shipping - 1 business day
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">
                            $29.98
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="text-sm text-gray-900 w-full h-[48px] flex border-b border-gray-300 items-center font-medium cursor-pointer"
                        onClick={() => setShowShippingMethodOptions(true)}
                      >
                        Standard Shipping • FREE
                      </div>
                    )}
                  </fieldset>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-xs text-gray-400 mt-4 mb-1">
                      Payment method
                    </div>
                    <button
                      className={`hover:bg-gray-50 rounded px-2 py-1 ${
                        showPaymentMethodOptions && "bg-gray-50"
                      }`}
                      onClick={() =>
                        setShowPaymentMethodOptions(!showPaymentMethodOptions)
                      }
                    >
                      <RenderIcon
                        path={
                          showPaymentMethodOptions ? ChevronUp : ChevronDown
                        }
                        size={"w-3"}
                        type={"nav"}
                      />
                    </button>
                  </div>
                  {showPaymentMethodOptions ? (
                    <div>
                      <div className="flex flex-row justify-between items-center bg-gray-50 rounded p-2">
                        <div className="flex flex-col justify-center">
                          <div className="flex flex-row space-x-2">
                            <img
                              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg"
                              alt="amex"
                            />
                            <div className="text-sm text-gray-900 font-medium">
                              American Express **** **** **** 1111
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            123 S. 432 E.Salt Lake City, UT 84103
                          </div>
                        </div>
                        <button className="hover:bg-gray-50 rounded px-2 py-1">
                          <RenderIcon
                            path={VerticalEllipsis}
                            size={"w-1"}
                            type={"black"}
                          />
                        </button>
                      </div>
                      <button className="text-sm text-gray-900">
                        + Add a debit or credit card
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-row space-x-2 cursor-pointer"
                      onClick={() => setShowPaymentMethodOptions(true)}
                    >
                      <img
                        src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg"
                        alt="amex"
                      />
                      <div className="text-sm text-gray-900 font-medium">
                        American Express **** **** **** 1111
                      </div>
                    </div>
                  )}
                  <div className="border-b border-gray-300 mt-2"></div>
                  <div className="mt-3 relative flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-xs">
                      <label
                        htmlFor="newsletter"
                        className="font-medium text-gray-700"
                      >
                        Sign me up for news and offers from my company
                      </label>
                    </div>
                  </div>
                  <button className="mt-6 w-full font-semibold bg-indigo-600 rounded px-6 py-2 text-white">
                    Pay now
                  </button>
                  <button
                    className="text-xs text-gray-900 my-4 w-full"
                    onClick={() => setShowLogin(false)}
                  >
                    Check out as guest
                  </button>
                </>
              ) : (
                <>
                  <div className="mt-4 w-full flex flex-row items-center justify-center bg-gray-50 rounded-t border border-b-0 border-gray-300 px-4 py-2">
                    <RenderIcon path={FluidPayLogoDark} />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center border border-t-0 border-gray-300 rounded-b  p-4">
                    <h2 className="text-lg font-semibold">
                      Sign in or create an account
                    </h2>
                    <p className="text-sm text-gray-500">
                      Enter your email address to create an account or sign in
                      with your existing account.
                    </p>
                    <div
                      className="relative w-full mt-4"
                      onClick={() =>
                        document.getElementById("login-email").focus()
                      }
                    >
                      <label htmlFor="login-email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="login-email"
                        name="login-email"
                        type="email"
                        autoComplete="email"
                        onBlur={(e) => {
                          if (e.target.value) {
                            e.target.nextElementSibling.classList.add(
                              "top-1/4"
                            );
                            e.target.nextElementSibling.classList.add(
                              "text-xs"
                            );
                          }
                        }}
                        className="inputText text-sm pt-5 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                        Email
                      </span>
                    </div>
                    <button className="mt-3 w-full font-semibold bg-indigo-600 rounded px-6 py-2 text-white">
                      Continue with fluid pay
                    </button>
                    <div className="mt-3 text-sm text-indigo-600 cursor-pointer">
                      Sign in with passkey
                    </div>
                    <div className="mt-6 text-xs text-gray-600">
                      By using Fluid Pay, you agree to the
                      <a href="#" className="text-blue-600">
                        {" "}
                        terms of service
                      </a>{" "}
                      and
                      <a href="#" className="text-blue-600">
                        {" "}
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                  <div
                    className="mt-6 text-center text-gray-600 cursor-pointer"
                    onClick={() => setPaymentMethod("credit-card")}
                  >
                    Back
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

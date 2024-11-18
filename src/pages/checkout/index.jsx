import { useState } from "react";

import ApplePay from "../../images/svgs/brands/apple-pay.svg";
import GooglePay from "../../images/svgs/brands/GooglePay.svg";
import PayPal from "../../images/svgs/brands/payl001_paypal 1.svg";
import LockIcon from "../../images/svgs/regular/lock.svg";
import RenderIcon from "../../components/global/RenderIcon";

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
  // More products...
];

export default function Example() {
  const [showBillingAddress, setShowBillingAddress] = useState(false);
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
        <div className="flex flex-col md:grid md:grid-cols-7">
          {/* Checkout form */}
          <section
            aria-labelledby="payment-heading"
            className="col-span-4 flex-auto px-8 pb-16 pt-0 overflow-y-auto md:h-screen"
          >
            <div className="max-w-lg mx-auto md:mx-0 md:ml-auto">
              <div className="pt-10 flex flex-row justify-between">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
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
              <div className="flex flex-row space-x-2 justify-between items-center mt-6">
                <button
                  type="button"
                  className="flex-1 bg-gray-800 h-10 font-custom flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-900"
                >
                  <span className="sr-only">Pay with Fluid Pay</span>
                  fluid pay
                </button>
                <button
                  type="button"
                  className="flex-1 bg-white h-10 ring-1 ring-gray-300  flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-50"
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
                  className="flex-1 bg-gray-800 h-10 flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-gray-900"
                >
                  <span className="sr-only">Pay with Google Pay</span>
                  <RenderIcon
                    path={GooglePay}
                    // size={"w-12"}
                    type={"save-icons"}
                  />
                </button>
                {/* <button
                  type="button"
                  className="flex-1 bg-yellow-300 h-10 flex items-center justify-center rounded border border-transparent py-2 text-white hover:bg-yellow-400"
                >
                  <span className="sr-only">Pay with PayPal</span>
                  <RenderIcon
                    path={PayPal}
                    size={"pt-1 pl-2"}
                    type={"save-icons"}
                  />
                </button> */}
              </div>
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
                      className="text-sm/6 font-medium text-blue-600 underline"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="mt-2 -space-y-px rounded bg-white shadow-sm">
                    <div
                      className="relative w-full"
                      onClick={() => document.getElementById("email").focus()}
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
                          }
                        }}
                        className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                      <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                        Email
                      </span>
                    </div>
                  </div>
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
                          e.target.nextElementSibling.classList.add("top-1/4");
                        }}
                        onBlur={(e) => {
                          setTimeout(() => {
                            e.target.nextElementSibling.classList.add("hidden");
                          }, 200);
                          if (e.target.value) {
                            document
                              .getElementById("country-label")
                              .classList.add("top-1/4");
                          }
                        }}
                        onChange={(e) => {
                          const filter = e.target.value.toLowerCase();
                          const options = e.target.nextElementSibling.children;
                          for (let i = 0; i < options.length; i++) {
                            const option = options[i];
                            const text = option.textContent || option.innerText;
                            option.style.display = text
                              .toLowerCase()
                              .includes(filter)
                              ? ""
                              : "none";
                          }
                        }}
                        className="inputText text-sm pt-4 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                        className="absolute left-2.5 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-xs text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
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
                          }
                        }}
                        className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                      <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                            }
                          }}
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                            }
                          }}
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                          Address Line 2
                        </span>
                      </div>
                    </div>
                    <div className="flex -space-x-px">
                      <div
                        className="flex-1 relative w-full"
                        onClick={() => document.getElementById("city").focus()}
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
                            }
                          }}
                          className="inputText text-sm pt-4 peer rounded-bl w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                          className="inputText text-sm pt-4 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                          className="absolute left-2.5 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-xs text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
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
                            }
                          }}
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded-br focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                  <div className="mt-2 -space-y-px rounded bg-white shadow-sm">
                    <div className="flex-1 relative w-full">
                      <label htmlFor="shipping-method" className="sr-only">
                        Shipping Method
                      </label>
                      <select
                        id="shipping-method"
                        name="shipping-method"
                        onFocus={(e) => {
                          e.target.nextElementSibling.classList.remove(
                            "hidden"
                          );
                          e.target.classList.remove("py-3");
                          e.target.classList.add("pt-4");
                          e.target.nextElementSibling.classList.add("top-1/4");
                        }}
                        className="inputText text-sm py-3 peer w-full rounded border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        <option>Standard shipping - 3-5 business days</option>
                        <option>Express shipping - 2-3 business days</option>
                        <option>Overnight shipping - 1 business day</option>
                      </select>
                      <span className="absolute left-2.5 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-xs text-gray-400 hidden peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                        Shipping Method
                      </span>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <div className="flex flex-row justify-between">
                    <div className="text-sm/6 font-medium text-gray-900">
                      Payment
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
                  <div className="mt-2 -space-y-px rounded bg-white shadow-sm">
                    <div
                      className="relative w-full"
                      onClick={() =>
                        document.getElementById("card-number").focus()
                      }
                    >
                      <input
                        type="text"
                        id="card-number"
                        className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded-t focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        onBlur={(e) => {
                          if (e.target.value) {
                            e.target.nextElementSibling.classList.add(
                              "top-1/4"
                            );
                          }
                        }}
                      />
                      <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                        Card number
                      </span>
                      <div className="flex flex-row space-x-1 absolute items-center right-2 top-1/2 transform -translate-y-1/2">
                        {/* <img
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
                        <img
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/discover.C7UbFpNb.svg"
                          alt="discover"
                        /> */}
                        <RenderIcon path={LockIcon} size={"w-3"} />
                      </div>
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
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded-bl focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          onBlur={(e) => {
                            if (e.target.value) {
                              e.target.nextElementSibling.classList.add(
                                "top-1/4"
                              );
                            }
                          }}
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 rounded-br focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          onBlur={(e) => {
                            if (e.target.value) {
                              e.target.nextElementSibling.classList.add(
                                "top-1/4"
                              );
                            }
                          }}
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                          CVC
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 relative flex items-center">
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
                </fieldset>
                {showBillingAddress && (
                  <fieldset className="mt-6 bg-white">
                    <legend className="block text-sm/6 font-medium text-gray-900">
                      Billing address
                    </legend>
                    <div className="mt-2 -space-y-px rounded shadow-sm">
                      <div className="flex-1 relative w-full">
                        <label htmlFor="country-billing" className="sr-only">
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
                          className="inputText text-sm pt-4 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                          className="absolute left-2.5 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-xs text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
                        >
                          Country
                        </span>
                      </div>
                      <div
                        className="relative w-full"
                        onClick={() =>
                          document.getElementById("full-name-billing").focus()
                        }
                      >
                        <label htmlFor="full-name-billing" className="sr-only">
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
                            }
                          }}
                          className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        />
                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                              }
                            }}
                            className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                              }
                            }}
                            className="inputText text-sm pt-4 peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
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
                              }
                            }}
                            className="inputText text-sm pt-4 peer w-full rounded-bl border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                            City
                          </span>
                        </div>
                        <div className="flex-1 relative w-full">
                          <label htmlFor="state-billing" className="sr-only">
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
                                  .getElementById("state-label-billing")
                                  .classList.add("top-1/4");
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
                            className="inputText text-sm pt-4 rounded-t peer w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                            className="absolute left-2.5 top-1/2 transform transition-transform duration-300 ease-in-out -translate-y-1/2 text-xs text-gray-400 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700"
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
                              }
                            }}
                            className="inputText text-sm pt-4 peer rounded-br w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                          />
                          <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                            ZIP / Postal code
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                )}
              </div>
              <button className="mt-6 w-full font-semibold bg-indigo-600 rounded px-6 py-2 text-white">
                Buy Now
              </button>
            </div>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="flex flex-col items-center bg-gray-50 h-full px-10 md:px-2 pb-12 w-full md:col-span-3"
          >
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>
            <div className="flex flex-col md:max-w-md md:mr-auto w-full">
              <ul
                role="list"
                className="flex-auto divide-y divide-gray-200 overflow-y-auto md:px-6 w-full"
              >
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
                          <h3 className="text-gray-900">{product.name}</h3>
                          <p className="text-gray-500">{product.color}</p>
                          <p className="text-gray-900">{product.price}</p>
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
                    <div className="flex items-center space-x-2 h-6 shadow-lg bg-gray-200 rounded-xl">
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
                <div
                  className="relative w-full"
                  onClick={() =>
                    document.getElementById("discount-code").focus()
                  }
                >
                  <input
                    type="text"
                    id="discount-code"
                    className="inputText text-sm pt-4 peer rounded w-full border-0 ring-b-0 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    onBlur={(e) => {
                      if (e.target.value) {
                        e.target.nextElementSibling.classList.add("top-1/4");
                      }
                    }}
                  />
                  <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-1/4 peer-focus:text-xs peer-focus:text-gray-700">
                    Discount Code
                  </span>
                </div>
                <dl className="mt-10 space-y-2 text-sm font-medium text-gray-500">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">{subtotal}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="flex">
                      Discount
                      <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                        {discount.code}
                      </span>
                    </dt>
                    <dd className="text-gray-900">-{discount.amount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-gray-900">{taxes}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-gray-900">{shipping}</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4 text-gray-900">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">{total}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

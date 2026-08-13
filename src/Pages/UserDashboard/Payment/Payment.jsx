import { useState } from "react";

/* Helper Components */
const InputField = ({ label, id, ...props }) => (
   <div>
      <label
         htmlFor={id}
         className="mb-2 text-slate-900 font-medium text-sm inline-block"
      >
         {label}
      </label>
      <input
         {...props}
         type="text"
         id={id}
         required
         className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      />
   </div>
);

const BankRow = ({ label, value }) => (
   <div className="flex justify-between gap-4 text-sm text-slate-500">
      <dt>{label}</dt>
      <dd className="text-slate-900 font-medium">{value}</dd>
   </div>
);

const Payment = () => {
   const [activeTab, setActiveTab] = useState("card");

   const tabs = [
      { id: "card", label: "Credit Card", controls: "cardContent" },
      { id: "paypal", label: "PayPal", controls: "paypalContent" },
      { id: "bank", label: "Bank Transfer", controls: "bankContent" },
   ];

   return (
      <div className="w-full p-7 h-9/10 flex justify-center items-center">
         <section
            className="py-6 px-4 md:px-8 bg-primary-content rounded-md"
            aria-labelledby="payment-heading"
         >
            <div className="max-w-lg mx-auto">
               {/* Order Details Card */}
               <div className="bg-white border border-slate-300 rounded-md p-4 md:p-6">
                  <div className="flex justify-between items-start">
                     <div className="space-y-1">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                           Current Order
                        </span>
                        <h2
                           id="payment-heading"
                           className="text-xl font-bold text-slate-900"
                        >
                           Charging port replace
                        </h2>
                     </div>
                     <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                        <span className="text-[10px] font-bold text-primary">
                           SECURE
                        </span>
                     </div>
                  </div>
                  <div className="mt-8 flex items-baseline gap-1">
                     <span className="text-4xl font-bold text-slate-900">
                        $100.00
                     </span>
                  </div>
               </div>

               <div className="mt-8">
                  {/* Tabs Navigation */}
                  <ul
                     role="tablist"
                     aria-label="Payment method"
                     className="flex w-full font-medium text-sm text-slate-600 rounded-md border border-slate-300 divide-x divide-slate-300"
                  >
                     {tabs.map((tab) => (
                        <li key={tab.id} className="w-full">
                           <button
                              role="tab"
                              aria-selected={activeTab === tab.id}
                              aria-controls={tab.controls}
                              onClick={() => setActiveTab(tab.id)}
                              className={`w-full h-full py-2 px-3.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${activeTab === tab.id ? "text-slate-900 bg-slate-100  " : "hover:text-slate-900 "} ${tab.id === "card" ? "rounded-l-[5px]" : ""} ${tab.id === "bank" ? "rounded-r-[5px]" : ""}`}
                           >
                              {tab.label}
                           </button>
                        </li>
                     ))}
                  </ul>

                  {/* Panels */}

                  {/* CARD PANEL */}
                  {activeTab === "card" && (
                     <div
                        id="cardContent"
                        role="tabpanel"
                        tabIndex="0"
                        className="mt-8"
                     >
                        <form
                           className="space-y-4"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <InputField
                              label="Cardholder Name"
                              id="cardholder-name"
                              placeholder="John Doe"
                           />
                           <InputField
                              label="Card Number"
                              id="card-number"
                              placeholder="1234 5678 9012 3456"
                           />

                           <div className="grid grid-cols-2 gap-4">
                              <InputField
                                 label="Expiry Date"
                                 id="expiry-date"
                                 placeholder="MM/YY"
                              />
                              <InputField
                                 label="CVV"
                                 id="cvv"
                                 placeholder="123"
                              />
                           </div>

                           <div>
                              <label className="inline-flex items-center group cursor-pointer">
                                 <input
                                    id="billing-address"
                                    type="checkbox"
                                    className="sr-only"
                                    defaultChecked
                                 />
                                 <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-primary">
                                    <svg
                                       className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                                       viewBox="0 0 12 10"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                    >
                                       <path d="M1 5l3 3 7-7" />
                                    </svg>
                                 </span>
                                 <span className="ml-3 text-sm text-slate-700">
                                    Billing address is the same as shipping
                                    address
                                 </span>
                              </label>
                           </div>

                           <div className="flex flex-col space-y-4">
                              <button
                                 type="submit"
                                 className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                              >
                                 Pay $100.00
                              </button>
                              <p className="text-center leading-relaxed text-slate-500 text-xs">
                                 Your payment data is encrypted and processed
                                 securely. We do not store your full card
                                 details on our servers.
                              </p>
                           </div>
                        </form>
                     </div>
                  )}

                  {/* PAYPAL PANEL */}
                  {activeTab === "paypal" && (
                     <div
                        id="paypalContent"
                        role="tabpanel"
                        tabIndex="0"
                        className="mt-8"
                     >
                        <button
                           type="button"
                           className="w-full px-3.5 py-2 text-sm font-semibold rounded-md bg-[#ffc439] hover:bg-[#f5b800] text-[#003087] flex items-center justify-center gap-2 transition-colors"
                        >
                           <svg
                              viewBox="0 0 24 24"
                              className="w-5 h-5 fill-[#003087]"
                           >
                              <path d="M7.5 20.5h2.1c.5 0 .9-.3 1-.8l.5-3.2c.1-.5.5-.8 1-.8h1.3c2.6 0 4.6-1.1 5.2-4.3.3-1.3.1-2.3-.5-3-.7-.8-1.9-1.2-3.5-1.2H9.4c-.5 0-.9.3-1 .8L6.3 19.7c-.1.4.2.8.7.8z" />
                           </svg>
                           Pay with PayPal ($129.00)
                        </button>
                     </div>
                  )}

                  {/* BANK TRANSFER PANEL */}
                  {activeTab === "bank" && (
                     <div
                        id="bankContent"
                        role="tabpanel"
                        tabIndex="0"
                        className="mt-8"
                     >
                        <h2 className="text-base font-semibold text-slate-900">
                           Bank Transfer Details
                        </h2>
                        <p className="text-sm text-slate-500 mt-2">
                           Please use the following details to complete your
                           payment.
                        </p>
                        <dl className="mt-6 space-y-4">
                           <BankRow label="Account Name" value="ABC Pvt Ltd" />
                           <BankRow label="Bank Name" value="ABC Bank" />
                           <BankRow
                              label="Account Number"
                              value="XXXX XXXX 8561"
                           />
                           <BankRow label="IFSC Code" value="ABC0005618" />
                        </dl>
                        <p className="text-xs text-slate-500 mt-6 italic">
                           Note: Please include your Order ID as a reference in
                           the transfer.
                        </p>
                     </div>
                  )}
               </div>
            </div>
         </section>
      </div>
   );
};

export default Payment;

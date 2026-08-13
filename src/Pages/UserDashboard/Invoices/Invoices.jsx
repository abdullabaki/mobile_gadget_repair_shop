import "react";

const Invoices = () => {
   return (
      <div className="w-full p-7">
         <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
            <h1 className="font-bold text-2xl my-4 text-center text-primary">
               Gadget Care Services
            </h1>
            <hr className="mb-2" />
            <div className="flex justify-between mb-6">
               <h1 className="text-lg font-bold">Invoice</h1>
               <div className="text-gray-700">
                  <div>Date: 10/08/2026</div>
                  <div>Invoice #: INV12355</div>
               </div>
            </div>
            <div className="mb-8">
               <h2 className="text-lg font-bold mb-4">Bill To:</h2>
               <div className="text-gray-700 mb-2">MD Rafi</div>
               <div className="text-gray-700">rafi@mail.com</div>
               <div className="text-gray-700 mb-2">123 GEC, Chattogram</div>
            </div>
            <table className="w-full mb-8">
               <thead>
                  <tr>
                     <th className="text-left font-bold text-gray-700">
                        Description
                     </th>
                     <th className="text-right font-bold text-gray-700">
                        Amount
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="text-left text-gray-700">Charging port</td>
                     <td className="text-right text-gray-700">$70.00</td>
                  </tr>
                  <tr>
                     <td className="text-left text-gray-700">Repair Crarg</td>
                     <td className="text-right text-gray-700">$30.00</td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td className="text-left font-bold text-gray-700">
                        Total
                     </td>
                     <td className="text-right font-bold text-gray-700">
                        $100.00
                     </td>
                  </tr>
               </tfoot>
            </table>
            <div className="text-gray-700 mb-2">
               Thank you for Connect to us
            </div>
            <div className="text-success text-sm font-bold">
               Payment Successfull
            </div>
         </div>
      </div>
   );
};

export default Invoices;

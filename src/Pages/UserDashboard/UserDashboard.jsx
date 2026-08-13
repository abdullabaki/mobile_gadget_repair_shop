import "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoReloadSharp } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { Link } from "react-router";

const UserDashboard = () => {
   return (
      <div className="w-full p-7">
         <div className="pb-8">
            <div className="text-xl font-bold pb-1">
               Wellcome Back, <span className="text-primary">MD Rafi</span>
            </div>
            <h6 className="text-sm text-accent-content">
               Manage your repair orders and live booking updates instantly.
            </h6>
         </div>
         <div id="con_table">
            <h2 className="text-md font-medium pb-3">
               Technician's Booking Inventory-
            </h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
               <table className="table shadow-2xl">
                  <thead>
                     <tr className="text-neutral">
                        <th>No</th>
                        <th>Technician Name</th>
                        <th>Designation</th>
                        <th>Perferred Date & Time</th>
                        <th>Booking Status</th>
                        <th>Contact Technician</th>
                        <th>Payment Status</th>
                        <th>Live Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>1</th>
                        <td>Inam ul Haq</td>
                        <td>Hardware & Software Expert</td>
                        <td>10/08/26 11:30AM</td>
                        <td className="text-success font-semibold">Accepted</td>
                        <td>
                           <button>
                              <Link className="btn btn-primary btn-outline rounded-md py-2 px-6 duration-300 ease-in">
                                 Message Technician <FaArrowRight />
                              </Link>
                           </button>
                        </td>
                        <td>
                           <button>
                              <Link className="btn btn-success">
                                 Collect Invoice <LiaFileInvoiceSolid />
                              </Link>
                           </button>
                        </td>
                        <td className="text-secondary font-semibold">
                           Working on it...
                        </td>
                     </tr>
                     <tr>
                        <th>2</th>
                        <td>Inam ul Haq</td>
                        <td>Hardware & Software Expert</td>
                        <td>10/08/26 11:30AM</td>
                        <td className="text-success font-semibold">Accepted</td>
                        <td>
                           <button>
                              <Link className="btn btn-primary btn-outline rounded-md py-2 px-6 duration-300 ease-in">
                                 Message Technician <FaArrowRight />
                              </Link>
                           </button>
                        </td>
                        <td>
                           <button>
                              <Link className="btn btn-success">
                                 Collect Invoice <LiaFileInvoiceSolid />
                              </Link>
                           </button>
                        </td>
                        <td className="text-secondary font-semibold">
                           Delivery men collected products
                        </td>
                     </tr>
                     <tr>
                        <th>3</th>
                        <td>Arif Hasan</td>
                        <td>Mobile Repair Specialist</td>
                        <td>8/08/26 10:00AM</td>
                        <td className="text-success font-semibold">Accepted</td>
                        <td>
                           <button>
                              <Link className="btn btn-primary btn-outline rounded-md py-2 px-6 duration-300 ease-in">
                                 Message Technician <FaArrowRight />
                              </Link>
                           </button>
                        </td>
                        <td>
                           <span className="text-md text-success flex gap-2 items-center font-semibold">
                              Price Being Negotiated <IoReloadSharp />
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <th>4</th>
                        <td>Ifran Ahmed</td>
                        <td>Laptop & Computer Expert</td>
                        <td>13/08/26 05:00PM</td>
                        <td className="text-error font-semibold">Rejected</td>
                        <td></td>
                        <td className="text-error font-semibold">Canceled</td>
                     </tr>
                     <tr>
                        <th>5</th>
                        <td>Ibrahim Khan</td>
                        <td>Apple & Android Specialist</td>
                        <td>5/08/26 12:50PM</td>
                        <td className="text-warning font-semibold">Panding</td>
                        <td></td>
                        <td>
                           <span className="text-md text-warning font-semibold">
                              Price Not Determined
                           </span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default UserDashboard;

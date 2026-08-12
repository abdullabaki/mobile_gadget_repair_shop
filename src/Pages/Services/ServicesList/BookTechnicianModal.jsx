import "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
// import { FaArrowRight } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const BookTechnicianModal = forwardRef((props, ref) => {
   const dialogRef = useRef(null);
   useImperativeHandle(ref, () => ({
      showModal() {
         dialogRef.current?.showModal();
      },
      closeModal() {
         dialogRef.current?.close();
      },
   }));

   return (
      <div>
         <dialog ref={dialogRef} id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl text-left rounded-3xl">
               <div className="flex items-center">
                  <p className="text-3xl bg-[#e5f0ff] bg-opacity-50 py-2 px-1.5 rounded-xl mr-3">
                     🛠️
                  </p>
                  <div>
                     <h3 className="font-bold text-2xl">Book Technician</h3>
                     <p className="text-accent-content text-sm">
                        Schedule a repair service with your selected technician.
                     </p>
                  </div>
               </div>
               <div className="flex items-center bg-[#eef2f7] mt-4 rounded-xl py-4 px-2">
                  <p className="text-4xl py-2 px-1.5 mr-3">👨‍🔧</p>
                  <div>
                     <h3 className="font-bold text-2xl">
                        {props.technicianName || "the technician"}
                     </h3>
                     <p className="text-accent-content text-sm">
                        Mobile Repair Specialist
                     </p>
                     <div className="flex text-warning text-sm items-center pt-1">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <p className="font-semibold text-accent-content pl-1">
                           4.5
                        </p>
                        <p className="text-accent-content pl-4">
                           📍 Chattogram
                        </p>
                     </div>
                  </div>
               </div>
               <fieldset className="grid grid-cols-2 gap-5 mt-6">
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Your Name *
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="input w-full text-xs mt-1"
                        placeholder="Enter your name"
                        required
                     />
                  </div>
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Phone Number *
                     </label>
                     <input
                        type="tel"
                        id="number"
                        className="input w-full text-xs mt-1"
                        placeholder="+880"
                        required
                     />
                  </div>
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Your E-Mail *
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="input w-full text-xs mt-1"
                        placeholder="Enter your E-Mail"
                        required
                     />
                  </div>
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Device Name*
                     </label>
                     <input
                        type="text"
                        id="text"
                        className="input w-full text-xs mt-1"
                        placeholder="Enter device name with model"
                        required
                     />
                  </div>
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Device Image
                     </label>
                     <input
                        type="file"
                        className="file-input w-full text-xs mt-1"
                     />
                  </div>
                  <div>
                     <label className="text-xs font-semibold" htmlFor="name">
                        Perferred Date & Time*
                     </label>
                     <input
                        type="datetime-local"
                        id="time"
                        className="input w-full text-xs mt-1"
                        required
                     />
                  </div>
                  <div className="col-span-2">
                     <label className="text-xs font-semibold" htmlFor="name">
                        Pick-up Point*
                     </label>
                     <input
                        type="text"
                        id="address"
                        className="input w-full text-xs mt-1"
                        placeholder="Enter your pic-up address"
                        required
                     />
                  </div>
                  <div className="col-span-2">
                     <label className="text-xs font-semibold" htmlFor="name">
                        Problem Details*
                     </label>
                     <textarea
                        className="textarea"
                        placeholder="Describe your device problem..."
                        className="input w-full text-xs mt-1 h-35"
                        required
                     ></textarea>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                     <form method="dialog">
                        <button className="btn btn-block btn-error btn-outline rounded-xl py-2 duration-300 ease-in">
                           Cancel <ImCancelCircle />
                        </button>
                     </form>
                     <input
                        type="submit"
                        value="View All Technicians →"
                        className="btn btn-block btn-primary btn-outline rounded-xl py-2 duration-300 ease-in"
                     />
                  </div>
               </fieldset>
            </div>
         </dialog>
      </div>
   );
});

export default BookTechnicianModal;

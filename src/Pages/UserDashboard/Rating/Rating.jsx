import "react";

const Rating = () => {
   return (
      <div className="w-full p-7 h-9/10 flex justify-center items-center">
         <div className="bg-white rounded-md w-120 p-4">
            <div>
               <h1 className="text-center text-primary font-bold text-xl pb-4">
                  Rate the technician.
               </h1>
               <h2 className="font-semibold">Inam ul Haq</h2>
               <p className="text-xs text-accent-content">
                  Hardware & Software Expert
               </p>
            </div>
            <div className="flex items-center gap-2 py-4 text-sm">
               <h6>Rating:</h6>
               <div className="rating">
                  <div className="mask mask-star" aria-label="1 star"></div>
                  <div className="mask mask-star" aria-label="2 star"></div>
                  <div className="mask mask-star" aria-label="3 star"></div>
                  <div
                     className="mask mask-star"
                     aria-label="4 star"
                     aria-current="true"
                  ></div>
                  <div className="mask mask-star" aria-label="5 star"></div>
               </div>
            </div>
            <div>
               <label className="text-sm font-semibold" htmlFor="name">
                  Comment
               </label>
               <textarea
                  className="textarea"
                  placeholder="Describe your device problem..."
                  className="input w-full text-xs mt-1 h-35"
                  required
               ></textarea>
            </div>
            <button className="btn btn-block btn-primary mt-3">Submit Comment</button>
         </div>
      </div>
   );
};

export default Rating;

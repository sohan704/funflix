

const Billing = () => {
  return (
    <div className="my-44 w-full lg:w-9/12 mx-auto">
      <div>
        <div className="text-6xl text-center">
            <span className="text-red-400 font-bold">Subscription</span> Plan
        </div>
      </div>
      <div className="grid gap-10 my-14 grid-cols-1 lg:grid-cols-3">

        <div className="card text-white shadow-xl">
          <div className="card-body bg-red-400">
            <h2 className="card-title text-3xl lg:text-5xl">$0.99</h2>
            <p>per week</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card text-white shadow-xl">
          <div className="card-body bg-green-500">
            <h2 className="card-title text-3xl lg:text-5xl">$49.99</h2>
            <p>One Time Payment</p>
            <div className="badge badge-secondary">Save 80%</div>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card text-white shadow-xl">
          <div className="card-body bg-blue-500">
            <h2 className="card-title text-3xl lg:text-5xl">$11.99</h2>
            <p>per year</p>
            <div className="badge badge-secondary">Save 40%</div>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default Billing;
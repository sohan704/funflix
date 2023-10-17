
import Navbar from "../Components/Navbar";


const AddProducts = () => {
  return (

    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" placeholder="Image Link..." className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" placeholder="Brand Name" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="Price" className="input input-bordered" required />

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="number" placeholder="Rating" min="1" max="5" className="input input-bordered" required />

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea rows="6"
                  cols="50" type="text" placeholder="Short Description" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select className="input input-bordered" name="type">
                  <option value="Film">Film</option>
                  <option value="Drama">Drama</option>
                  <option value="Series">Series</option>
                  <option value="Song">Song</option>
                </select>

              </div>
              <div className="form-control mt-6">
                <button className="btn text-2xl btn-neutral">ADD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
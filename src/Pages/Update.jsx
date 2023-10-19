import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import swal from 'sweetalert';
const Update = () => {
  const data = useLoaderData();

  const {image, name, brand, _id, price, rating,type} = data;
  console.log(data);
  
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value.replace(/\s/g, '').toLowerCase();
    const price = form.price.value;
    const rating = form.rating.value;
  
    const type = form.type.value;

    const newProduct = {image, name, brand, price, rating,type};
    console.log(newProduct);
   
    fetch(`http://localhost:5000/product/${_id}`,{
      method:'PUT',
      headers:{
       'content-type' : 'application/json'
      },
      body: JSON.stringify(newProduct),
   }).then(res => res.json()).then(data => {
      console.log(data);
      swal("Product Updated!", "Good Job!", "success");
      
   })
   

  }


  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Update Product</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateProduct} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input defaultValue={image} type="text" name="image" placeholder="Image Link..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered" required />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input type="text" defaultValue={brand} name="brand" placeholder="Brand Name" className="input input-bordered" required />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="number" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="number" defaultValue={rating} name="rating" placeholder="Rating" min="1" max="5" className="input input-bordered" required />

                </div>

               

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <select defaultValue={type} className="input input-bordered" name="type">
                    <option value="Film">Film</option>
                    <option value="Drama">Drama</option>
                    <option value="Series">Series</option>
                    <option value="Song">Song</option>
                  </select>

                </div>
                <div className="form-control mt-6">
                  <button className="btn text-2xl btn-neutral">UPDATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
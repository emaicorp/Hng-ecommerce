
export default function CheckOutDetails(){
    return(
        <div class=" py-3 ">
        <h4 class="mb-3">Billing Details</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div class="col-sm-6">
              <label for="phoneNum" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phoneNum" placeholder="Enter Phone number" value="" required />
              
            </div>
            <div class="col-sm-6">
              <label for="additionalNumber" class="form-label">Additional Number</label>
              <input type="text" class="form-control" id="additionalNumber" placeholder="Enter Additional Number" value="" required />
             
            </div>

           

            

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Enter Address" required />
              
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address Information</label>
              <input type="text" class="form-control" id="address2" placeholder="Enter Address Information" />
            </div>
            <div class="col-12">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" placeholder="Enter City" />
            </div>

           
          </div>

            <div className="d-flex justify-content-end gap-3 mt-3">
                <button className="btn accent-border rounded ">Cancel</button>
                <button className="btn bg-accent rounded text-white">Save</button>
            </div>
      

        

        </form>
      </div>
      
    )
}
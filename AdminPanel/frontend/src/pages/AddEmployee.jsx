import React from 'react'

export default function AddEmployee() {
    return (
       <div className='container-fluid'>
         <div className='container shadow mt-4 p-4 rounded'>
            <div className='col-6 '>
                <h4 className='mb-3'>Add a new Employee</h4>
                <div className='d-flex w-100 justify-content-between'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="*******" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn btn-primary text-white mt-3 '>Add Employee</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='container shadow w-100 p-3 mt-4 '>
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <button className='btn btn-warning'>Edit</button>
        <button className='btn btn-danger ms-2'>Delete</button>
        </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
       </div>
    )
}

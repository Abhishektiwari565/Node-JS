import { status } from "init";
import React, { useEffect, useState } from "react";
import {base_uri} from '../utils/global_variables.js'
import axios from 'axios'

export default function Profile() {
  const [currentUser, setCurrentUser] = useState({});

  const handleUpdateProfile=async()=>{
    try{
      const res=await axios.put(`${base_uri}/admin/update-user`,currentUser,{withCredentials:true});
      alert(res.data.message);
    }catch(err){
      alert(err.message);
    }
  }

  useEffect(()=>{
    getCurrentUser();
  },[])
  const getCurrentUser=async()=>{
    try{
      const res=await axios.get(`${base_uri}/admin/get-current-user`,{withCredentials:true});
      if(res.data.status){
        setCurrentUser(res.data.user);
      }
    }catch(err){
      alert(err.message);
    }
  }
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">

        {/* ===== Header ===== */}
        <div className="mb-4">
          <h2 className="fw-bold">Profile Settings</h2>
          <p className="text-muted mb-0">
            Update your account information.
          </p>
        </div>

        <div className="row">

          {/* ===== Left Profile Image Section ===== */}
          <div className="col-md-4 text-center border-end">
            <img
              src={"https://m.media-amazon.com/images/I/81YCVM+H-LL._AC_UF894,1000_QL80_.jpg"}
              alt="Profile"
              className="rounded-circle shadow-sm mb-3"
              width="150"
              height="150"
            />

          </div>

          {/* ===== Right Form Section ===== */}
          <div className="col-md-8 ps-4">
            <form>
              <div className="row g-3">
                 {/* Email */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address *
                  </label>
                  <input 
                    disabled={true}
                    value={currentUser.email ?? ""}
                    onChange={(e)=>{setCurrentUser({...currentUser,email:e.target.value})}}
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                {/* Full Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Full Name *
                  </label>
                  <input
                  value={currentUser.name ?? ""}
                  onChange={(e)=>{setCurrentUser({...currentUser,name:e.target.value})}}
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                  />
                </div>

                {/* User Role */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    User Role *
                  </label>
                  <select className="form-select">
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>

                {/* Monthly Budget */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Monthly Budget Limit (₹) *
                  </label>
                  <input
                  value={currentUser.monthlyBudget ?? ""}
                  onChange={(e)=>{setCurrentUser({...currentUser,monthlyBudget:e.target.value})}}
                    type="number"
                    className="form-control"
                    placeholder="Enter budget"
                  />
                </div>

                {/* Mobile */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Mobile Number *
                  </label>
                  <input
                  value={currentUser.phone ?? ""}
                  onChange={(e)=>{setCurrentUser({...currentUser,phone:e.target.value})}}
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile number"
                  />
                </div>

                {/* Savings Goal */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Savings Goal (₹) *
                  </label>
                  <input
                  value={currentUser.saving ?? ""}
                   onChange={(e)=>{setCurrentUser({...currentUser,saving:e.target.value})}}
                    type="number"
                    className="form-control"
                    placeholder="Enter savings goal"
                  />
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                {/* Account Status */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Account Status *
                  </label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Blocked</option>
                  </select>
                </div>

              </div>

              {/* ===== Buttons ===== */}
              <div className="mt-4 d-flex justify-content-end gap-3">
                <button type="button" onClick={handleUpdateProfile} className="btn btn-primary px-4">
                  Save Changes
                </button>

                <button type="reset" className="btn btn-outline-secondary px-4">
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import { status } from "init";
import React, { useEffect, useState } from "react";
import { base_uri } from '../utils/global_variables.js'
import axios from 'axios'
import { useLocation } from 'react-router'

export default function EditEmployee() {
    const { state } = useLocation();
    useEffect(() => {
        setCurrentUser(state.user);
    }, [])
    
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateProfile = async () => {
        try {
            const res = await axios.put(`${base_uri}/admin/update-user`, currentUser, { withCredentials: true });
            alert(res.data.message);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="container py-5">
            <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="mb-4">
                    <h2 className="fw-bold">Profile Settings</h2>
                    <p className="text-muted mb-0">
                        Update your account information.
                    </p>
                </div>

                <div className="row">

                    <div className="col-md-4 text-center border-end">
                        <img
                            src={"https://m.media-amazon.com/images/I/81YCVM+H-LL._AC_UF894,1000_QL80_.jpg"}
                            alt="Profile"
                            className="rounded-circle shadow-sm mb-3"
                            width="150"
                            height="150"
                        />

                    </div>
                    <div className="col-md-8 ps-4">
                        <form>
                            <div className="row g-3">
                               
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Email Address *
                                    </label>
                                    <input
                                        disabled={true}
                                        value={currentUser.email ?? ""}
                                        onChange={(e) => { setCurrentUser({ ...currentUser, email: e.target.value }) }}
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Full Name *
                                    </label>
                                    <input
                                        value={currentUser.name ?? ""}
                                        onChange={(e) => { setCurrentUser({ ...currentUser, name: e.target.value }) }}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter full name"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Role
                                    </label>
                                    <select value={currentUser.role ?? ""} onChange={(e) => { setCurrentUser({ ...currentUser, role: e.target.value }) }} className="form-select">
                                        <option value="">role</option>
                                        <option value={"admin"}>Admin</option>
                                        <option value={"user"}>User</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Monthly Budget Limit (₹) *
                                    </label>
                                    <input
                                        value={currentUser.monthlyBudget ?? ""}
                                        onChange={(e) => { setCurrentUser({ ...currentUser, monthlyBudget: e.target.value }) }}
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter budget"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Mobile Number *
                                    </label>
                                    <input
                                        value={currentUser.phone ?? ""}
                                        onChange={(e) => { setCurrentUser({ ...currentUser, phone: e.target.value }) }}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter mobile number"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Savings Goal (₹) *
                                    </label>
                                    <input
                                        value={currentUser.saving ?? ""}
                                        onChange={(e) => { setCurrentUser({ ...currentUser, saving: e.target.value }) }}
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter savings goal"
                                    />
                                </div>

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

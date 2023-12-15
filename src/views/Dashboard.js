// import { useStateContext } from "../contexts/ContextProvider";
// import {useEffect, useState} from "react";
// import axiosClient from "../../axios-client";
// import $ from 'jquery';
import 'react-daterange-picker/dist/css/react-calendar.css';
import 'datatables.net';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// import { DateRangePicker } from 'react-date-range';
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';

export default function UserDashboard() {
    return (
        <div>
<div className="row">
                <div className="col-lg-8 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                          <p className="mb-4">
                            You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                            your profile.
                          </p>

                          <a href="/" className="btn btn-sm btn-label-primary">View Badges</a>
                        </div>
                      </div>
                      <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-4">
                          <img
                            src="assets/adminpanel/assets/img/illustrations/man-with-laptop-light.png"
                            height="140"
                            alt="View Badge User"
                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                            data-app-light-img="illustrations/man-with-laptop-light.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img
                                src="assets/adminpanel/assets/img/icons/unicons/wallet-info.png"
                                alt="Credit Card"
                                className="rounded"
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                <a className="dropdown-item" href="/">View More</a>
                                <a className="dropdown-item" href="/">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span>Sales</span>
                          <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="assets/adminpanel/assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded" />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt4"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                <a className="dropdown-item" href="/">View More</a>
                                <a className="dropdown-item" href="/">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span className="d-block mb-1">Payments</span>
                          <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                          <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt"></i> -14.82%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                </div>
                <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                  <div className="row">
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <div className="card-title mb-0">
                        <h5 className="m-0 me-2">Order Statistics</h5>
                        <small className="text-muted">42.82k Total Sales</small>
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="orederStatistics"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                          <a className="dropdown-item" href="/">Select All</a>
                          <a className="dropdown-item" href="/">Refresh</a>
                          <a className="dropdown-item" href="/">Share</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <h2 className="mb-2">8,258</h2>
                          <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart"></div>
                      </div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Electronic</h6>
                              <small className="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">82.5k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Fashion</h6>
                              <small className="text-muted">T-shirt, Jeans, Shoes</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">23.8k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Decor</h6>
                              <small className="text-muted">Fine Art, Dining</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">849k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-secondary"
                              ><i className="bx bx-football"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Sports</h6>
                              <small className="text-muted">Football, Cricket Kit</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">99</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-tabs-line-card-income"
                            aria-controls="navs-tabs-line-card-income"
                            aria-selected="true"
                          >
                            Income
                          </button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Expenses</button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Profit</button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body px-0">
                      <div className="tab-content p-0">
                        <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                          <div className="d-flex p-4 pt-3">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="assets/adminpanel/assets/img/icons/unicons/wallet.png" alt="User" />
                            </div>
                            <div>
                              <small className="text-muted d-block">Total Balance</small>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0 me-1">$459.10</h6>
                                <small className="text-success fw-semibold">
                                  <i className="bx bx-chevron-up"></i>
                                  42.9%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="incomeChart"></div>
                          <div className="d-flex justify-content-center pt-4 gap-2">
                            <div className="flex-shrink-0">
                              <div id="expensesOfWeek"></div>
                            </div>
                            <div>
                              <p className="mb-n1 mt-1">Expenses This Week</p>
                              <small className="text-muted">$39 less than last week</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 order-2 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Transactions</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="transactionID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                          <a className="dropdown-item" href="/">Last 28 Days</a>
                          <a className="dropdown-item" href="/">Last Month</a>
                          <a className="dropdown-item" href="/">Last Year</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Paypal</small>
                              <h6 className="mb-0">Send money</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+82.6</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Mac&#39;D</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+270.69</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Transfer</small>
                              <h6 className="mb-0">Refund</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+637.91</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Credit Card</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-838.71</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Starbucks</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+203.33</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="assets/adminpanel/assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Mastercard</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-92.45</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 order-4 order-lg-3">
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Activity Timeline</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="timelineWapper"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="timelineWapper">
                          <a className="dropdown-item" href="/">Select All</a>
                          <a className="dropdown-item" href="/">Refresh</a>
                          <a className="dropdown-item" href="/">Share</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="timeline">
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-primary"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">12 Invoices have been paid</h6>
                              <small className="text-muted">12 min ago</small>
                            </div>
                            <p className="mb-2">Invoices have been paid to the company</p>
                            <div className="d-flex">
                              <a href="/" className="d-flex align-items-center me-3">
                                <img
                                  src="assets/adminpanel/assets/img/icons/misc/pdf.png"
                                  alt="true"
                                  width="23"
                                  className="me-2"
                                />
                                <h6 className="mb-0">invoices.pdf</h6>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-warning"></span>
                          <div className="timeline-event">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Client Meeting</h6>
                              <small className="text-muted">45 min ago</small>
                            </div>
                            <p className="mb-2">Project meeting with john @10:15am</p>
                            <div className="d-flex flex-wrap">
                              <div className="avatar me-3">
                                <img src="assets/adminpanel/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div>
                                <h6 className="mb-0">Lester McCarthy (Client)</h6>
                                <span>CEO of ThemeSelection</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-item timeline-item-transparent">
                          <span className="timeline-point timeline-point-info"></span>
                          <div className="timeline-event pb-0">
                            <div className="timeline-header mb-1">
                              <h6 className="mb-0">Create a new project for client</h6>
                              <small className="text-muted">2 Day Ago</small>
                            </div>
                            <p className="mb-2">5 team members in a project</p>
                            <div className="d-flex align-items-center avatar-group">
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Vinnie Mostowy"
                              >
                                <img src="assets/adminpanel/assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Marrie Patty"
                              >
                                <img src="assets/adminpanel/assets/img/avatars/12.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Jimmy Jackson"
                              >
                                <img src="assets/adminpanel/assets/img/avatars/9.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Kristine Gill"
                              >
                                <img src="assets/adminpanel/assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div
                                className="avatar pull-up"
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="Nelson Wilson"
                              >
                                <img src="assets/adminpanel/assets/img/avatars/14.png" alt="Avatar" className="rounded-circle" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-end-indicator">
                          <i className="bx bx-check-circle"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-3 order-lg-4 mb-4 mb-lg-0">
                  <div className="card text-center">
                    <div className="card-header py-3">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-browser"
                            aria-controls="navs-pills-browser"
                            aria-selected="true"
                          >
                            Browser
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-os"
                            aria-controls="navs-pills-os"
                            aria-selected="false"
                          >
                            Operating System
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-country"
                            aria-controls="navs-pills-country"
                            aria-selected="false"
                          >
                            Country
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content pt-0">
                      <div className="tab-pane fade show active" id="navs-pills-browser" role="tabpanel">
                        <div className="table-responsive text-start">
                          <table className="table table-borderless text-nowrap">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Browser</th>
                                <th>Visits</th>
                                <th className="w-50">Data In Percentage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/chrome.png"
                                      alt="Chrome"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Chrome</span>
                                  </div>
                                </td>
                                <td>8.92k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{width: "84.75%"}}
                                        aria-valuenow="84.75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">84.75%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/safari.png"
                                      alt="Safari"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Safari</span>
                                  </div>
                                </td>
                                <td>7.29k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{width: "72.43%"}}
                                        aria-valuenow="72.43"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">72.43%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/firefox.png"
                                      alt="Firefox"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Firefox</span>
                                  </div>
                                </td>
                                <td>6.11k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{width: "67.37%"}}
                                        aria-valuenow="67.37"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">67.37%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/edge.png"
                                      alt="Edge"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Edge</span>
                                  </div>
                                </td>
                                <td>5.08k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "60.12%"}}
                                        aria-valuenow="60.12"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">60.12%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/opera.png"
                                      alt="Opera"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Opera</span>
                                  </div>
                                </td>
                                <td>3.93k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "51.94%"}}
                                        aria-valuenow="51.94"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">51.94%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/brave.png"
                                      alt="Brave"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Brave</span>
                                  </div>
                                </td>
                                <td>3.19k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{width: "39.94%"}}
                                        aria-valuenow="39.94"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">39.94%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/vivaldi.png"
                                      alt="Vivaldi"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Vivaldi</span>
                                  </div>
                                </td>
                                <td>1.29k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "28.43%"}}
                                        aria-valuenow="28.43"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">18.43%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/uc.png"
                                      alt="UC Browser"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>UC Browser</span>
                                  </div>
                                </td>
                                <td>328</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "20.14%"}}
                                        aria-valuenow="20.14"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">20.14%</small>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-os" role="tabpanel">
                        <div className="table-responsive text-start">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>System</th>
                                <th>Visits</th>
                                <th className="w-50">Data In Percentage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/windows.png"
                                      alt="Windows"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Windows</span>
                                  </div>
                                </td>
                                <td>875.24k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{width: "71.5%"}}
                                        aria-valuenow="71.50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">71.50%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/mac.png"
                                      alt="Mac"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Mac</span>
                                  </div>
                                </td>
                                <td>89.68k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{width: "66.67%"}}
                                        aria-valuenow="66.67"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">66.67%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/ubuntu.png"
                                      alt="Ubuntu"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Ubuntu</span>
                                  </div>
                                </td>
                                <td>37.68k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "62.82%"}}
                                        aria-valuenow="62.82"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">62.82%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/chrome.png"
                                      alt="Chrome"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Chrome</span>
                                  </div>
                                </td>
                                <td>35.34k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "56.25%"}}
                                        aria-valuenow="56.25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">56.25%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/cent.png"
                                      alt="Cent"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Cent</span>
                                  </div>
                                </td>
                                <td>32.25k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "42.76%"}}
                                        aria-valuenow="42.76"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">42.76%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/linux.png"
                                      alt="Linux"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Linux</span>
                                  </div>
                                </td>
                                <td>22.15k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{width: "37.77%"}}
                                        aria-valuenow="37.77"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">37.77%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/fedora.png"
                                      alt="Fedora"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Fedora</span>
                                  </div>
                                </td>
                                <td>1.13k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "29.16%"}}
                                        aria-valuenow="29.16"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">29.16%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="assets/adminpanel/assets/img/icons/brands/vivaldi-os.png"
                                      alt="Vivaldi"
                                      height="24"
                                      className="me-2"
                                    />
                                    <span>Vivaldi</span>
                                  </div>
                                </td>
                                <td>1.09k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "26.26%"}}
                                        aria-valuenow="26.26"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">26.26%</small>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-country" role="tabpanel">
                        <div className="table-responsive text-start">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Country</th>
                                <th>Visits</th>
                                <th className="w-50">Data In Percentage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/us.svg" alt="USA" height="24" className="me-2" />
                                    <span>USA</span>
                                  </div>
                                </td>
                                <td>87.24k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{width: "89.12%"}}
                                        aria-valuenow="89.12"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">89.12%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/br.svg" alt="Brazil" height="24" className="me-2" />
                                    <span>Brazil</span>
                                  </div>
                                </td>
                                <td>62.68k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{width: "78.23%"}}
                                        aria-valuenow="78.23"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">78.23%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/in.svg" alt="India" height="24" className="me-2" />
                                    <span>India</span>
                                  </div>
                                </td>
                                <td>52.58k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{width: "69.82%"}}
                                        aria-valuenow="69.82"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">69.82%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/au.svg" alt="Australia" height="24" className="me-2" />
                                    <span>Australia</span>
                                  </div>
                                </td>
                                <td>44.13k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{width: "59.9%"}}
                                        aria-valuenow="59.90"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">59.90%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/de.svg" alt="Germany" height="24" className="me-2" />
                                    <span>Germany</span>
                                  </div>
                                </td>
                                <td>32.21k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{width: "57.11%"}}
                                        aria-valuenow="57.11"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">57.11%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/fr.svg" alt="France" height="24" className="me-2" />
                                    <span>France</span>
                                  </div>
                                </td>
                                <td>37.87k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{width: "41.23%"}}
                                        aria-valuenow="41.23"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">41.23%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/pt.svg" alt="Portugal" height="24" className="me-2" />
                                    <span>Portugal</span>
                                  </div>
                                </td>
                                <td>20.29k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "37.11%"}}
                                        aria-valuenow="37.11"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">37.11%</small>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/adminpanel/assets/svg/flags/cn.svg" alt="China" height="24" className="me-2" />
                                    <span>China</span>
                                  </div>
                                </td>
                                <td>12.21k</td>
                                <td>
                                  <div className="d-flex justify-content-between align-items-center gap-3">
                                    <div className="progress w-100" style={{height: "10px"}}>
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{width: "17.61%"}}
                                        aria-valuenow="17.61"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small className="fw-semibold">17.61%</small>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<br />
<br />
</div>
    )
}

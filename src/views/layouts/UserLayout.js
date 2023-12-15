import {Outlet} from "react-router-dom";
// import axiosClient from "../../axios-client";
// import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";

export default function UserLayout() {
  return (
	<html
	lang="en"
	className="light-style layout-navbar-fixed layout-menu-fixed"
	dir="ltr"
	data-theme="theme-default"
	data-assets-path="assets/adminpanel/assets/"
	data-template="vertical-menu-template">
	<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />

		<title>Blogmorpheus</title>
		<meta name="description" content="" />
		<link rel="icon" type="image/x-icon" href="assets/adminpanel/assets/img/favicon/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
		<link
		href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
		/>
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/fonts/boxicons.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/fonts/fontawesome.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/fonts/flag-icons.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/css/demo.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/libs/typeahead-js/typeahead.css" />
		<link rel="stylesheet" href="assets/adminpanel/assets/vendor/libs/apex-charts/apex-charts.css" />
		<link href="assets/adminpanel/assets/oldadmin/sweetalert2/sweetalert2.min.css" rel="stylesheet" type="text/css" />
		<script src="assets/adminpanel/assets/vendor/js/helpers.js"></script>
		<script src="assets/adminpanel/assets/vendor/js/template-customizer.js"></script>
		<script src="assets/adminpanel/assets/js/config.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
		<link href="assets/adminpanel/assets/plugins/select2/css/select2.min.css" rel="stylesheet" />
		<link href="assets/adminpanel/assets/plugins/select2/css/select2-bootstrap4.css" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/css/bootstrap-select.min.css" />
		<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/css/flag-icon.min.css' />
		<link rel="stylesheet" type="text/css" href="assets/adminpanel/assets/plugins/quill/quill.core.css" />
		<link rel="stylesheet" type="text/css" href="assets/adminpanel/assets/plugins/quill/quill.snow.css" />
	</head>
	<body>
    {/* <div id="eq-loader">
        <div className="eq-loader-div">
            <div className="eq-loading dual-loader mx-auto mb-5"></div>
        </div>
    </div> */}
	<div className="layout-wrapper layout-content-navbar">
		<div className="layout-container">
			<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
				<div className="app-brand demo" style={{marginBottom: "30px"}}>
					<Link to="/" className="app-brand-link">
						<img src="https://uploads-ssl.webflow.com/60d00e867dec20177b899a28/611baf4ca1447563b2100c67_ESGnie%20Logo%20CAA%2017%20August%202021.png" alt="" style={{width: "100%"}} />
					</Link>

					<a href="/" className="layout-menu-toggle menu-link text-large ms-auto">
						<i className="bx bx-chevron-left bx-sm align-middle"></i>
					</a>
				</div>

				<div className="menu-inner-shadow"></div>

				<ul className="menu-inner py-1">
					<li className="menu-item active open">
						<a href="/" className="menu-link menu-toggle">
							<i className="menu-icon tf-icons bx bx-home-circle"></i>
							<div data-i18n="Dashboards">Dashboard</div>
						</a>
						<ul className="menu-sub">
							<li className="menu-item active">
								<Link to="/" className="menu-link">
									<div data-i18n="Analytics">Analytics</div>
								</Link>
							</li>
						</ul>
					</li>
					<li className="menu-header small text-uppercase">
						<span className="menu-header-text">Apps &amp; Pages</span>
					</li>
					<li className="menu-item open">
						<a href="/" className="menu-link menu-toggle">
							<i className="menu-icon tf-icons bx bx-carousel"></i>
							<div data-i18n="Blog">Document</div>
						</a>

						<ul className="menu-sub">
							<li className="menu-item">
								<Link to="/summary" className="menu-link">
									<div data-i18n="API">Summarization</div>
								</Link>
							</li>
						</ul>
						<ul className="menu-sub">
							<li className="menu-item">
								<Link to="/answer" className="menu-link">
									<div data-i18n="API">Question/Answer</div>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
			<div className="layout-page">
					<nav
						className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
						id="layout-navbar"
					>
						<div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
						<a className="nav-item nav-link px-0 me-xl-4" href="/">
							<i className="bx bx-menu bx-sm"></i>
						</a>
						</div>

						<div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
						<div className="navbar-nav align-items-center">
							<div className="nav-item navbar-search-wrapper mb-0">
							<a className="nav-item nav-link search-toggler px-0" href="/">
								<i className="bx bx-search bx-sm"></i>
								<span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
							</a>
							</div>
						</div>
						<ul className="navbar-nav flex-row align-items-center ms-auto">
							<li className="nav-item dropdown-language dropdown me-2 me-xl-0">
							<a className="nav-link dropdown-toggle hide-arrow" href="/" data-bs-toggle="dropdown">
								<i className="fi fi-us fis rounded-circle fs-3 me-1"></i>
							</a>
							</li>
							<li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
							<a
								className="nav-link dropdown-toggle hide-arrow"
								href="/"
								data-bs-toggle="dropdown"
								data-bs-auto-close="outside"
								aria-expanded="false"
							>
								<i className="bx bx-grid-alt bx-sm"></i>
							</a>
							</li>
							<li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
							<a
								className="nav-link dropdown-toggle hide-arrow"
								href="/"
								data-bs-toggle="dropdown"
								data-bs-auto-close="outside"
								aria-expanded="false"
							>
								<i className="bx bx-bell bx-sm"></i>
								<span className="badge bg-danger rounded-pill badge-notifications">5</span>
							</a>
							</li>
							<li className="nav-item navbar-dropdown dropdown-user dropdown">
							<a className="nav-link dropdown-toggle hide-arrow" href="/" data-bs-toggle="dropdown">
								<div className="avatar avatar-online">
										<img src="assets/adminpanel/assets/images/user-img-dummy.png" className="user-img w-px-40 h-auto rounded-circle" alt="user avatar" />
								</div>
							</a>
							</li>
						</ul>
						</div>
						<div className="navbar-search-wrapper search-input-wrapper d-none">
						<input
							type="text"
							className="form-control search-input container-xxl border-0"
							placeholder="Search..."
							aria-label="Search..."
						/>
						<i className="bx bx-x bx-sm search-toggler cursor-pointer"></i>
						</div>
					</nav>
			<div className="page-wrapper">
			<div className="content-wrapper">
				<div className="container-xxl flex-grow-1 container-p-y">
					<Outlet />
					<div className="content-backdrop fade"></div>
				</div>
			</div>
			</div>
			<div className="layout-overlay layout-menu-toggle"></div>
			<div className="drag-target"></div>

    </div>
    </div>
    </div>
	<script src="assets/adminpanel/assets/vendor/libs/jquery/jquery.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/popper/popper.js"></script>
    <script src="assets/adminpanel/assets/vendor/js/bootstrap.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/hammer/hammer.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/i18n/i18n.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/typeahead-js/typeahead.js"></script>
    <script src="assets/adminpanel/assets/vendor/js/menu.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/sortablejs/sortable.js"></script>
    <script src="assets/adminpanel/assets/vendor/libs/apex-charts/apexcharts.js"></script>
    <script src="assets/adminpanel/assets/js/main.js"></script>
    <script src="assets/adminpanel/assets/js/dashboards-analytics.js"></script>
	<script src="assets/adminpanel/assets/oldadmin/sweetalert2/sweetalert2.min.js"></script>
    <script src="assets/adminpanel/assets/oldadmin/js/app.js"></script>
    <script src="assets/adminpanel/assets/oldadmin/js/danidev.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
	<script src="assets/adminpanel/assets/plugins/quill/quill_new.min.js"></script>
	<script src="assets/adminpanel/assets/plugins/select2/js/select2.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js"></script>
	</body>
	</html>
  );
}

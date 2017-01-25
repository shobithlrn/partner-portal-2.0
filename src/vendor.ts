// Angular 2 core lib
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

import 'rxjs';
import '@angularclass/hmr';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...


//For single css bundle we need to require all css files bcos webpack reads all the files and bundles it.
require('./../public/css/reset.css');
require('./../public/css/bootstrap.min.css');
require('./../public/css/common.css');
require('./../public/css/login.css');
require('./../public/css/general.css')
require('./../public/css/course-catalogue.css');
require('./../public/css/new-trial-account.css');
require('./../public/css/filter.css');
require('./../public/css/filter-media.css');
require('./../public/css/bootstrap-datepicker3.min.css');
//require('./../public/css/owl.carousel.min.css');
//require('./../public/css/owl.theme.default.min.css');
require('./../public/css/new-trial-dashboard.css');
require('./../public/fonts/material-design/css/material-design-iconic-font.min.css');

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';/*
import 'bootstrap/dist/css/bootstrap.min.css';*/
//require('./../public/js/jquery.min.js')
//require('./../public/js/bootstrap.min.js')
//require('./../public/js/course-resize.js')
//require('./../public/js/course-catalog.js')
/*require('./../public/js/new-trial-account.js')
require('./../public/js/jquery.popupoverlay.js')
require('./../public/js/jquery-ui.min.js')
require('./../public/js/nav-ani.js')
require('./../public/js/owl.carousel.min.js')
require('./../public/js/dashboard-prospect.js')*/
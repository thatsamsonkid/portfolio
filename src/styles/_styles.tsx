import { createGlobalStyle } from "styled-components";
import device from "../shared/utils/breakpoints";

export const GlobalStyle = createGlobalStyle`

:root {
	--white: #ffff;
	--royal-blue: #003365;
	--black: black;
	--light-blue: #3769e8;
	/* --gray: #48648b; i like this blue */
	--sky-blue: #71ddff;
	--seafoam: #7bd9a7;
	--salmon: #ff7373;
	--gray: #6f747a;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

a{
  text-decoration: none;
}

.font-light {
	font-weight: 300;
}

.sea-green {
	color: var(--seafoam) !important;
}

.royal-blue {
	color: var(--royal-blue) !important;
}

.bckgrd-sea-green {
	background-color: var(--seafoam) !important;
}

.bckgrd-white {
	background-color: var(--white) !important;
}

.bckgrd-royal-blue {
	background-color: var(--royal-blue) !important;
}

.small-text {
	font-size: 1rem;
}

.medium-text {
	font-size: 1.4rem;
	letter-spacing: 0.25px;
	line-height: 2rem;
}

/* Font weights */
:root {
	--light: 300;
	--regular: 400;
	--semi: 600;
	--bold: 700;
}

/* Shadows */
:root {
	--shadow1: 5px 3px 20px 0px rgba(19, 14, 53, 0.2);
}

/* Color Utils */
.text-green {
	color: var(--seafoam);
}

.text-light-blue {
	color: var(--light-blue);
}

.text-gray {
	color: var(--gray);
}

.text-white {
	color: var(--white);
}

.text-red {
	color: #ff0000;
}

.sm-body {
	letter-spacing: 0.25px;
	line-height: 2.4rem;
	color: var(--royal-blue);
	font-size: 1.4rem;

	@include media-breakpoint-up(md) {
		font-size: 1.6rem;
	}
}

/* utils */
.w-100 {
	width: 100%;
}

.no-list {
	list-style: none;
	padding-left: 0;
}

.no-border {
	border: none !important;
}

.img-fluid {
	max-width: 100%;
	height: auto;
}

.match-parent {
	width: 100%;
	height: 100%;
}

.mb-6 {
	margin-bottom: 4rem !important;
}

.mb-7 {
	margin-bottom: 6rem !important;
}

.mt-6 {
	margin-top: 4rem !important;
}

.mt-7 {
	margin-top: 6rem !important;
}


.flex-flow-col-to-row {
	flex-flow: column;

	@media ${device.tabletAndAbove} {
		flex-flow: row;
	}
}

// Need to move this alert styles
.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

.grecaptcha-badge {
	visibility: hidden;
	pointer-events: none;
}

.font-semi {
	font-weight: 600;
}

.hidden-text{
	line-height: 0; 
    font-size: 0;
    color: transparent; 
}

`;

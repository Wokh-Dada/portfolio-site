/*
*  interface для объекта с массивом меню и string
* */

import {JSXBase} from "@stencil/core/internal";
import HTMLAttributes = JSXBase.HTMLAttributes;

export interface AbdullakhHeaderNav {
  id: number;
  logoname: string;
  mobileBar: string;
  nav: any;
  iconTheme: any;
}

export interface AbdullakhHeaderNavSocial {
  id: number;
  social: string;
  socialHref: string;
}

export interface WhyTheme {
  whyTheme: HTMLAttributes;
}

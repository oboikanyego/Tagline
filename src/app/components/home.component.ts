/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_umfMYgFDC0AxfTAE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_umfMYgFDC0AxfTAE(bh) {
    try {
      bh = this.sd_ccovkjdjbST70AtP(bh);
      //appendnew_next_sd_umfMYgFDC0AxfTAE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_umfMYgFDC0AxfTAE');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_ccovkjdjbST70AtP(bh) {
    try {
      this.page.navItems = [];
      this.page.sideNavItems = [];
      this.page.selectedNavItem = 2;
      this.page.images = [];
      bh = this.setDefaultVariables(bh);
      //appendnew_next_sd_ccovkjdjbST70AtP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ccovkjdjbST70AtP');
    }
  }

  setDefaultVariables(bh) {
    try {
      const page = this.page;
      page.navItems = [
        'About Us',
        'Services',
        'Our Values',
        'State of the Industry',
        'Place We Work',
        'Testimonials',
        'Contact Us',
      ];
      page.sideNavItems = [
        'Biography',
        'Our Office',
        'Our Founder',
        'Referrals',
        'Forms',
      ];
      page.images = [
        '/Web/Images/flowers.jpg',
        '/Web/Images/rome.jpg',
        '/Web/Images/seagull.jpg',
      ];
      //appendnew_next_setDefaultVariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8JAyuGKkNZKbiuaE');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}

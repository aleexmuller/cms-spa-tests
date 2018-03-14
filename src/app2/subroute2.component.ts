import {Component} from '@angular/core';

import {APP_BASE_HREF} from "@angular/common";

@Component({
  templateUrl: './src/app2/subroute1.component.html',
})
export class Subroute2 {
	constructor() {
		alert(APP_BASE_HREF);

	}
}

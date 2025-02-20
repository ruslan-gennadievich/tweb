/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import { getMiddleware } from "../../helpers/middleware";
import AutocompleteHelper from "./autocompleteHelper";

export default class AutocompleteHelperController {
  private helpers: Set<AutocompleteHelper> = new Set();
  private middleware = getMiddleware();
  /* private tempId = 0;

  public incrementToggleCount() {
    return ++this.tempId;
  }

  public getToggleCount() {
    return this.tempId;
  } */

  public getMiddleware() {
    this.middleware.clean();
    return this.middleware.get();
  }

  public addHelper(helper: AutocompleteHelper) {
    this.helpers.add(helper);
  }

  public hideOtherHelpers(helper?: AutocompleteHelper) {
    this.helpers.forEach(h => {
      if(h !== helper) {
        h.toggle(true);
      }
    });
  }
}

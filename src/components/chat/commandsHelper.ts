/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import type ChatInput from "./input";
import AutocompleteHelperController from "./autocompleteHelperController";
import AutocompletePeerHelper from "./autocompletePeerHelper";

export default class CommandsHelper extends AutocompletePeerHelper {
  constructor(appendTo: HTMLElement, controller: AutocompleteHelperController, private chatInput: ChatInput) {
    super(appendTo, 
      controller,
      'commands-helper',
      (target) => {
        const innerHTML = target.querySelector(`.${AutocompletePeerHelper.BASE_CLASS_LIST_ELEMENT}-name`).innerHTML;
        chatInput.messageInput.innerHTML = innerHTML;
        chatInput.sendMessage();
      }
    );
  }
}

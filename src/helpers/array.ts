/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

/* import { copy } from "./object";

export function listMergeSorted(list1: any[] = [], list2: any[] = []) {
  const result = copy(list1);

  const minId = list1.length ? list1[list1.length - 1] : 0xFFFFFFFF;
  for(let i = 0; i < list2.length; i++) {
    if(list2[i] < minId) {
      result.push(list2[i]);
    }
  }

  return result;
} */

export const accumulate = (arr: number[], initialValue: number) => arr.reduce((acc, value) => acc + value, initialValue);

export function findAndSpliceAll<T>(array: Array<T>, verify: (value: T, index: number, arr: typeof array) => boolean) {
  const out: typeof array = [];
  let idx = -1;
  while((idx = array.findIndex(verify)) !== -1) {
    out.push(array.splice(idx, 1)[0]);
  }

  return out;
}

export function forEachReverse<T>(array: Array<T>, callback: (value: T, index?: number, array?: Array<T>) => void) {
  for(let length = array.length, i = length - 1; i >= 0; --i) {
    callback(array[i], i, array);
  }
};

export function insertInDescendSortedArray<T extends {[smth in K]?: number}, K extends keyof T>(array: Array<T>, element: T, property: K, pos?: number) {
  if(pos === undefined) {
    pos = array.indexOf(element);
    if(pos !== -1) {
      array.splice(pos, 1);
    }
  }

  const sortProperty: number = element[property];
  const len = array.length;
  if(!len || sortProperty <= array[len - 1][property]) {
    return array.push(element) - 1;
  } else if(sortProperty >= array[0][property]) {
    array.unshift(element);
    return 0;
  } else {
    for(let i = 0; i < len; i++) {
      if(sortProperty > array[i][property]) {
        array.splice(i, 0, element);
        return i;
      }
    }
  }

  console.error('wtf', array, element);
  return array.indexOf(element);
}

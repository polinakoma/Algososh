import { INumbersArray } from "../types/componentsTypes";

export const ASCENDING_SELECTION: string = 'arr[i].num > arr[j].num';
export const DESCENDING_SELECTION: string = 'arr[i].num < arr[j].num';

export const ASCENDING_BUBBLE: string = 'arr[i].num > arr[i + 1].num';
export const DESCENDING_BUBBLE: string = 'arr[i].num < arr[i + 1].num';

export const setAnimation = (time: number) => 
new Promise<void>((resolve) => setTimeout(resolve, time));

export const swap = (arr: INumbersArray[], firstIndex: number, secondIndex: number): void => {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

export const randomArr = () => {
  let arr = [];
  let count = Math.floor(Math.random() * (6 - 4) + 4);

  for(let i = 0; i < count; i++) {
    arr.push((Math.round(Math.random() * (100 - 0) + 0)).toString());
  };
  return arr;
};
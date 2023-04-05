import { ElementStates } from "../../types/element-states";
import { INumbersArray } from "../../types/componentsTypes";
import { swap } from "../../utils/utils";
import { setAnimation } from "../../utils/utils";
import { SHORT_DELAY_IN_MS } from "../../utils/constants/delays";

// сортировка выбором
export const selectionSort = async (arr: INumbersArray[], type: string, 
setter?: React.Dispatch<React.SetStateAction<INumbersArray[]>>) => {

  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      arr[i].state = ElementStates.Changing;
      arr[j].state = ElementStates.Changing;
      setter && setter([...arr]);
      await setAnimation(SHORT_DELAY_IN_MS);
      if(eval(type)) {
        arr[j].state = ElementStates.Changing;
        swap(arr, i, j);
      };
      arr[j].state = ElementStates.Default;
      arr[i].state = ElementStates.Modified;
      setter && setter([...arr]);
    };
  };

  return arr;
};

// сортировка пузырьком
export const bubbleSort = async (arr: INumbersArray[], type: string,
setter?: React.Dispatch<React.SetStateAction<INumbersArray[]>>) => {

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      arr[i].state = ElementStates.Changing;
      arr[i + 1].state = ElementStates.Changing;
      setter && setter(arr);
      await setAnimation(SHORT_DELAY_IN_MS);
      if (eval(type)) {
          swap(arr, i, i + 1);
      };
      arr[i].state = ElementStates.Default;
      arr[i + 1].state = ElementStates.Default;
      setter && setter([...arr]);
    };

    arr[arr.length - j - 1].state = ElementStates.Modified;
    setter && setter([...arr]);
    await setAnimation(SHORT_DELAY_IN_MS);
  };

  return arr;
};
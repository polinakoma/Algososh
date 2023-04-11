import { ISymbolsStep } from "../../types/componentsTypes";
import { ElementStates } from "../../types/element-states";

export const getSteps = (string: string):ISymbolsStep[] => {
    const symbols = string.split('');
    const steps: ISymbolsStep[] = [];
  
    if(symbols.length === 0) {
      return steps
    };
    steps.push({
      symbols: [...symbols]
    });
  
    let leftIndex = 0;
    let rightIndex = symbols.length - leftIndex - 1;
    while(leftIndex <= rightIndex) {
      steps.push({
        symbols: [...symbols],
        index: leftIndex,
        state: ElementStates.Changing
      });
  
      symbols[leftIndex] = string[rightIndex];
      symbols[rightIndex] = string[leftIndex];
      steps.push({
        symbols: [...symbols],
        index: leftIndex,
        state: ElementStates.Modified
      });
      leftIndex++
      rightIndex--
    };
  
    steps.push({
      symbols: [...symbols]
    });
  
    return steps;
  };
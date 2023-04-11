import React, { FormEvent, useState, MouseEvent, Dispatch } from "react";
import styles from './sorting-page.module.css';
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";
import { Column } from "../ui/column/column";
import { ElementStates } from "../../types/element-states";
import { INumbersArray } from "../../types/componentsTypes";
import { selectionSort, bubbleSort } from "./utils";
import { ASCENDING_SELECTION, DESCENDING_SELECTION, ASCENDING_BUBBLE, 
DESCENDING_BUBBLE } from '../../utils/utils';

export const SortingPage: React.FC = () => {

  const [loaderAscending, setLoaderAscending] = useState(false);
  const [loaderDescending, setLoaderDescending] = useState(false);
  const [diasbleState, setDiasbleState] = useState(false);

  const [array, setArray] = useState<INumbersArray[]>([]);
  const [sortingType, setSortingType] = useState<Direction>();
  const [sortingMethod, setSortingMethod] = useState('sorting');

  const randomArr = () => {
    let arr: INumbersArray[] = [];
    let count = Math.floor(Math.random() * (17 - 3) + 3);

    for(let i = 0; i < count; i++) {
      arr.push({
        num: Math.round(Math.random() * (100 - 0) + 0),
        state: ElementStates.Default
      });
    };
    setArray(arr);
  };

  const handleRandomArrayGenerate = (evt: FormEvent) => {
    evt.preventDefault();
    randomArr();
  };

  // сортировка выбором
  const getSelectionSort = async (arr:  INumbersArray[], type: string, 
    loader: Dispatch<React.SetStateAction<boolean>>) => {
    loader(true);
    setDiasbleState(true);

    selectionSort(arr, type, setArray);

    loader(false);
    setDiasbleState(false);
    return setArray(arr);
  };

   // сортировка пузырьком
   const getBubbleSort = async (arr: INumbersArray[], type: string,
  loader: Dispatch<React.SetStateAction<boolean>>) => {
    loader(true);
    setDiasbleState(true);

    bubbleSort(arr, type, setArray);

     loader(false);
     setDiasbleState(false);
     return setArray(arr);
   };

  const handleAscendingSort = (evt: MouseEvent) => {
    evt.preventDefault();
    setSortingType(Direction.Ascending);
    if(sortingMethod === 'sorting') {
      getSelectionSort(array, ASCENDING_SELECTION, setLoaderAscending);
    } else if (sortingMethod === 'bubble') {
      getBubbleSort(array, ASCENDING_BUBBLE, setLoaderAscending)
    };
  };

  const handleDescendingSort = (evt: MouseEvent) => {
    evt.preventDefault();
    setSortingType(Direction.Descending);
    if(sortingMethod === 'sorting') {
      getSelectionSort(array, DESCENDING_SELECTION, setLoaderDescending)
    } else if (sortingMethod === 'bubble') {
      getBubbleSort(array, DESCENDING_BUBBLE, setLoaderDescending)
    };
  };

  return (
    <SolutionLayout title="Сортировка массива">
      <form className={`${styles.form}`} onSubmit={handleRandomArrayGenerate}>
        <div className={styles.radioSet}>
          <RadioInput 
            label="Выбор" 
            extraClass="mt-10" 
            name="radio" 
            value="sorting" 
            defaultChecked
            onChange={() => setSortingMethod('sorting')} 
            disabled={diasbleState}/> 
          <RadioInput 
            label="Пузырёк" 
            extraClass="mt-10" 
            name="radio" 
            value="bubble"
            onChange={() => setSortingMethod('bubble')} 
            disabled={diasbleState}/>
        </div>
        <div className={styles.adjustmentSet}>
          <Button 
            text={'По возрастанию'} 
            sorting={Direction.Ascending} 
            disabled={diasbleState}
            onClick={handleAscendingSort} 
            isLoader={loaderAscending} 
            extraClass={styles.button}/>
          <Button 
            text={'По убыванию'} 
            sorting={Direction.Descending} 
            disabled={diasbleState}
            onClick={handleDescendingSort} 
            isLoader={loaderDescending} 
            extraClass={styles.button}/>
        </div>
        <Button 
          text={'Новый массив'} 
          type='submit' 
          disabled={diasbleState}/>
      </form>
      <ul className={styles.columnSet}>

        { array && (
          array.map((number, index) => {
            return (
              <li key={index} className={styles.column}>
                <Column 
                  index={number.num}  
                  state={number.state}/>
              </li>
            )
          })
        )}

      </ul>
    </SolutionLayout>
  );
};

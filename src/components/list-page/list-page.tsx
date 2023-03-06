import React, { ChangeEvent, useMemo, useState } from "react";
import styles from './list-page.module.css';
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { ElementStates } from "../../types/element-states";
import { IListSymbols} from "../../types/componentsTypes";
import { Circle } from "../ui/circle/circle";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { LinkedList } from "./list-class";
import { setAnimation, randomArr } from "../../utils/utils";
import { SHORT_DELAY_IN_MS } from "../../utils/constants/delays";

export const ListPage: React.FC = () => {

  const arrNum = (randomArr());
  const arrStr = arrNum.map(String);
  const initialList: IListSymbols[] = arrStr.map(symbol => ({
    symbol: symbol,
    state: ElementStates.Default,
    head: null,
    tail: null,
  }));

  const list = useMemo(() => new LinkedList<string>(arrStr), []);

  const [value, setValue] = useState(''); 
  const [ind, setInd] = useState(''); 
  const [array, setArray] = useState<IListSymbols[]>(initialList); 

  const [addHeadLoader, setAddHeadLoader] = useState(false); 
  const [addTailLoader, setAddTailLoader] = useState(false); 
  const [deleteHeadLoader, setDeleteHeadLoader] = useState(false); 
  const [deleteTailLoader, setDeleteTailLoader] = useState(false); 
  const [addByIdx, setAddByIdx] = useState(false); 
  const [deleteByIdx, setDeleteByIdx] = useState(false); 

  const handleChangeInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setValue(evt.currentTarget.value);
  };

  const handleChangeInputInd = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setInd(evt.currentTarget.value);
  };

  const handleAddHead = async () => {
    setAddHeadLoader(true);

    array[0].head = null;
    array[0].smallCircle = {
      symbol: value,
    };
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);
    array[0].smallCircle = undefined;

    list.prepend(value);
    array.unshift({
      symbol: value,
      state: ElementStates.Modified,
    });
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);
    array[0].state = ElementStates.Default;
    setArray([...array]);

    setValue('');
    setAddHeadLoader(false);
  };

  const handleAddTail = async () => {
    setAddTailLoader(true);

    array[array.length - 1].smallCircle = {
      symbol: value,
    };
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);
    array[array.length - 1].smallCircle = undefined;

    list.append(value);
    array.push({
      symbol: value,
      state: ElementStates.Modified,
    });
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);
    array[array.length - 1].state = ElementStates.Default;
    setArray([...array]);

    setValue('');
    setAddTailLoader(false);
  };

  const handleDeleteHead = async() => {
    setDeleteHeadLoader(true);

    if(!list.getHead()) {
      throw new Error ('List is empty');
    } else {
      array[0].smallCircle = {
        symbol: array[0].symbol,
      };
      array[0].symbol = '';
      setArray([...array]);
      await setAnimation(SHORT_DELAY_IN_MS);

      list.deleteHead();
      array.shift();
    };
    setArray([...array]);

    setDeleteHeadLoader(false)
  };

  const handleDeleteTail = async () => {
    setDeleteTailLoader(true);

    if(!list.getHead()) {
      throw new Error ('List is empty');
    } else {
      array[array.length - 1].smallCircle = {
        symbol: array[array.length - 1].symbol,
      };
      array[array.length - 1].symbol = '';
      setArray([...array]);
      await setAnimation(SHORT_DELAY_IN_MS);

      list.deleteTail();
      array.pop();
    };
    setArray([...array]);

    setDeleteTailLoader(false)
  };


  const handleAddByIndex = async () => {
    setAddByIdx(true);

    let index = Number(ind);
    list.addByIndex(value, index);
    for(let i = 0; i < index; i++) {
      array[i].state = ElementStates.Changing;
      await setAnimation(SHORT_DELAY_IN_MS);
      setArray([...array])
    };
    await setAnimation(SHORT_DELAY_IN_MS);

    array[index].smallCircle = {
      symbol: value,
    };
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);

    array[index].smallCircle = undefined;
    array.splice(index, 0, { symbol: value, state: ElementStates.Modified});
    setArray([...array]);
    array.map((num: IListSymbols) => {
      num.state = ElementStates.Default;
    });
    await setAnimation(SHORT_DELAY_IN_MS);

    setInd('');
    setValue('');
    setAddByIdx(false);
  };

  const handleDeleteByIndex = async () => {
    setDeleteByIdx(true);

    let index = Number(ind);
    list.deleteByIndex(index);
    for(let i = 0; i < index; i++) {
      array[i].state = ElementStates.Changing;
      await setAnimation(SHORT_DELAY_IN_MS);
      setArray([...array]);
    };
    await setAnimation(2000);

    array[index].smallCircle = {
      symbol: array[index].symbol,
    };
    array[index].symbol = '';  
    setArray([...array]);
    await setAnimation(SHORT_DELAY_IN_MS);

    array[index].smallCircle = undefined;
    array.splice(index, 1);
    setArray([...array]);
    array.map((num: IListSymbols) => {
      num.state = ElementStates.Default;
    });
    await setAnimation(SHORT_DELAY_IN_MS);
    
    setInd('');
    setValue('');
    setDeleteByIdx(false);
   };

  return (
    <SolutionLayout title="Связный список">
      <div> 
        <div className={styles.set}>
          <Input 
            isLimitText={true} 
            maxLength={4} 
            placeholder={"Введите значение"}
            extraClass={`${styles.input} mb-6`} 
            value={value}
            onChange={handleChangeInputValue}/>
          <Button 
            text={'Добавить в head'} 
            type={'button'} 
            onClick={handleAddHead}
            extraClass={styles.buttonSmall}
            isLoader={addHeadLoader}/>
          <Button 
            text={'Добавить в tail'} 
            type={'button'} 
            onClick={handleAddTail}
            extraClass={styles.buttonSmall}
            isLoader={addTailLoader}/>
          <Button 
            text={'Удалить из head'} 
            type={'button'} 
            onClick={handleDeleteHead}
            extraClass={styles.buttonSmall}
            isLoader={deleteHeadLoader}/>
          <Button 
            text={'Удалить из tail'} 
            type={'button'} 
            onClick={handleDeleteTail}
            extraClass={styles.buttonSmall}
            isLoader={deleteTailLoader}/>
        </div>
        <div className={styles.set}>
          <Input 
            isLimitText={false} 
            placeholder={"Введите индекс"} 
            value={ind}
            extraClass={styles.input}
            onChange={handleChangeInputInd}/>
          <Button 
            text={'Добавить по индексу'} 
            type={'button'} 
            onClick={handleAddByIndex}
            extraClass={styles.buttonBig}
            isLoader={addByIdx}/>
          <Button 
            text={'Удалить по индексу'} 
            type={'button'} 
            onClick={handleDeleteByIndex}
            extraClass={styles.buttonBig}
            isLoader={deleteByIdx}/>
        </div>
        <ul className={styles.list}>

          { array && (
            array.map((item, index) => {
              return (
                <li key={index} className={styles.circle}>
                  { item.smallCircle && (
                    <Circle 
                    isSmall 
                    extraClass={addTailLoader || addHeadLoader || addByIdx ? 
                      styles.smallCircle :
                      styles.smallCircleBottom}
                    letter={item.smallCircle?.symbol}
                    state={ElementStates.Changing}/>
                  )}
                  <Circle 
                    state={item.state} 
                    letter={item.symbol}
                    head={index === 0 && item.smallCircle === undefined ? 'head' : ''}
                    tail={index === array.length - 1 && item.smallCircle === undefined ? 'tail' : ''}
                    index={index}/>
                    <ArrowIcon />
                </li>
              )
            })
          )}

        </ul>
      </div>
    </SolutionLayout>
  );
};
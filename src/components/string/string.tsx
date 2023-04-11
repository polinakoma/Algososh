import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import styles from './string.module.css';
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { ISymbolsStep } from '../../types/componentsTypes';
import { ElementStates } from "../../types/element-states";
import { DELAY_IN_MS } from "../../utils/constants/delays"; 
import { getSteps } from "./utils";

export const StringComponent: React.FC = () => {

  const [buttonState, setButtonState] = useState(true);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState('');

  const [steps, setSteps] = useState<ISymbolsStep[]>([]);
  const [currentStep, setCurrentStep] = useState<ISymbolsStep | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const value = evt.target.value;
    value ? setButtonState(false) : setButtonState(true);
    setValue(value);
  };

  useEffect(() => {
    if(steps.length === 0 || stepIndex >= steps.length) {
      setLoader(false)
      return;
    };

    setLoader(true);
    setCurrentStep(steps[stepIndex]);
    setButtonState(true);
    setTimeout(() => {
      setStepIndex(stepIndex + 1)
    }, DELAY_IN_MS)
  }, [steps, stepIndex, currentStep, loader]);

  const handleShowWord = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setValue('');
    const form = evt.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      stringInput: HTMLInputElement;
    };
    const letters = formElements.stringInput.value;

    setCurrentStep(null);
    setStepIndex(0);
    setSteps(getSteps(letters));
  };

  return (
    <SolutionLayout title="Строка">
      <form className={styles.form} onSubmit={handleShowWord}> 
        <div className={styles.input}>
          <Input 
            type='text' 
            name='stringInput' 
            isLimitText={true} 
            maxLength={11} 
            onChange={handleChangeValue} 
            value={value}/>
          <Button  
            type='submit' 
            disabled={buttonState} 
            isLoader={loader}
            text={'Развернуть'}/>
        </div>
      </form> 
      <ul className={styles.list}>

        { currentStep && (
          currentStep.symbols.map((letter, index) => {
            let state = ElementStates.Default
            let stepIndex = currentStep.index;
            if(stepIndex !== undefined) {
              if(index === stepIndex || index === currentStep.symbols.length - stepIndex - 1) {
                state = currentStep.state ?? state}
            };
            return (
              <li key={index}>
                <Circle 
                  letter={letter} 
                  state={state}/>
              </li>
            )
          })
        )} 
         
      </ul>
    </SolutionLayout>
  )};
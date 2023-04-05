import { selectionSort, bubbleSort } from './utils';
import { ASCENDING_SELECTION, DESCENDING_SELECTION, ASCENDING_BUBBLE, 
DESCENDING_BUBBLE } from '../../utils/utils';
import { INumbersArray } from "../../types/componentsTypes";

describe('Sort', () => {

    describe('SelectionSort', () => {

        describe('SelectionSort Ascending', () => {
            it('sorts the empty array', async () => {
                const array: INumbersArray[] = [];
                const result = await selectionSort(array, ASCENDING_SELECTION);
                expect(result).toStrictEqual([]);
            });
            it('sorts the single number array', async () => {
                const array: INumbersArray[] = [{num: 1}];
                const result = await  selectionSort(array, ASCENDING_SELECTION);
                expect(result).toEqual([{num: 1, state: 'modified'}]);
            });
            it('sorts some array', async () => {
                const array = [{num: 1}, {num: 7}, {num: 4}];
                expect(await selectionSort(array, ASCENDING_SELECTION)).toEqual(
                    [{num: 1, state: 'modified'}, {num: 4, state: 'modified'}, {num: 7, state: 'modified'}]
                );
            });
        });

        describe('SelectionSort Descending', () => {
            it('sorts the empty array', async () => {
                const array: INumbersArray[] = [];
                const result = await  selectionSort(array, DESCENDING_SELECTION);
                expect(result).toStrictEqual([]);
            });
            it('sorts the single number array', async () => {
                const array: INumbersArray[] = [{num: 1}];
                const result = await  selectionSort(array, DESCENDING_SELECTION);
                expect(result).toEqual([{num: 1, state: 'modified'}]);
            });
            it('sorts some array', async () => {
                const array = [{num: 1}, {num: 7}, {num: 4}];
                expect(await selectionSort(array, DESCENDING_SELECTION)).toEqual(
                    [{num: 7, state: 'modified'}, {num: 4, state: 'modified'}, {num: 1, state: 'modified'}]
                );
            });
        });
    });

    describe('BubbleSort', () => {

        describe('BubbleSort Ascending', () => {
            it('sorts the empty array', async () => {
                const array: INumbersArray[] = [];
                const result = await bubbleSort(array, ASCENDING_BUBBLE);
                expect(result).toStrictEqual([]);
            });
            it('sorts the single number array', async () => {
                const array: INumbersArray[] = [{num: 1}];
                const result = await bubbleSort(array, ASCENDING_BUBBLE);
                expect(result).toEqual([{num: 1, state: 'modified'}]);
            });
            it('sorts some array', async () => {
                const array = [{num: 1}, {num: 7}, {num: 4}];
                expect(await bubbleSort(array, ASCENDING_BUBBLE)).toEqual(
                    [{num: 1, state: 'modified'}, {num: 4, state: 'modified'}, {num: 7, state: 'modified'}]
                );
            });
        });

        describe('BubbleSort Descending', () => {
            it('sorts the empty array', async () => {
                const array: INumbersArray[] = [];
                const result = await bubbleSort(array, DESCENDING_BUBBLE);
                expect(result).toStrictEqual([]);
            });
            it('sorts the single number array', async () => {
                const array: INumbersArray[] = [{num: 1}];
                const result = await bubbleSort(array, DESCENDING_BUBBLE);
                expect(result).toEqual([{num: 1, state: 'modified'}]);
            });
            it('sorts some array', async () => {
                const array = [{num: 1}, {num: 7}, {num: 4}];
                expect(await bubbleSort(array, DESCENDING_BUBBLE)).toEqual(
                    [{num: 7, state: 'modified'}, {num: 4, state: 'modified'}, {num: 1, state: 'modified'}]
                );
            });
        });
    });
});
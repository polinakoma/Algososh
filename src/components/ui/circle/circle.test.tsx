import renderer from "react-test-renderer";
import { ElementStates } from "../../../types/element-states";
import { Circle } from "./circle";

describe('Circle', () => {
    it('is empty', () => {
        const circle = renderer
        .create(<Circle/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has symbol', () => {
        const circle = renderer
        .create(<Circle letter="symbol"/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has head', () => {
        const circle = renderer
        .create(<Circle head='head'/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has react-element in head', () => {
        const circle = renderer
        .create(<Circle head={<Circle/>}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has tail', () => {
        const circle = renderer
        .create(<Circle tail='tail'/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has react-element in tail', () => {
        const circle = renderer
        .create(<Circle tail={<Circle/>}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has index', () => {
        const circle = renderer
        .create(<Circle index={1}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('has prop isSmall === true', () => {
        const circle = renderer
        .create(<Circle isSmall/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('is default', () => {
        const circle = renderer
        .create(<Circle state={ElementStates.Default}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('is changing', () => {
        const circle = renderer
        .create(<Circle state={ElementStates.Changing}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
    it('is modifiend', () => {
        const circle = renderer
        .create(<Circle state={ElementStates.Modified}/>)
        .toJSON();
        expect(circle).toMatchSnapshot();
    });
});
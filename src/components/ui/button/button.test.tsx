import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "./button";

describe('Button', () => {
    it('is empty button', () => {
        const button = renderer
        .create(<Button />)
        .toJSON();
        expect(button).toMatchSnapshot();
    });
    it('is button with text', () => {
        const button = renderer
        .create(<Button text="Текст"/>)
        .toJSON();
        expect(button).toMatchSnapshot();
    });
    it('is disable button', () => {
        const button = renderer
        .create(<Button disabled={true}/>)
        .toJSON();
        expect(button).toMatchSnapshot();
    });
    it('is loading button', () => {
        const button = renderer
        .create(<Button isLoader={true}/>)
        .toJSON();
        expect(button).toMatchSnapshot();
    });
    it('has a callback upon click', () => {
        window.alert = jest.fn();
        render(<Button text="Text" onClick={() => alert('Callback')}/>)
        const button = screen.getByText("Text");
        fireEvent.click(button);
        expect(window.alert).toHaveBeenCalledWith('Callback');
    }); 
});
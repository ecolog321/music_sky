import { ChangeEvent, useRef } from "react";
import { ProgressBar } from "./ProgressBar";
import renderer from "react-test-renderer";

describe("Component ProgressBar", () => {
  it("render progressbar", () => {
    const props = {
      max: 100,
      value: 10,
      step: 0.5,
      onChange: ()=>{}
    };
    const tree = renderer
      .create(
        <ProgressBar
          max={props.max}
          value={props.value}
          step={props.step}
          onChange={props.onChange}
        ></ProgressBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

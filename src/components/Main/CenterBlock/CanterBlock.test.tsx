import renderer from "react-test-renderer";
import ReduxProvider from "../../../store/ReduxProvider";
import { CenterBlock } from "./CenterBlock";

describe("TrackComponent", () => {
  it("render track", () => {
    const tree = renderer
      .create(
        <ReduxProvider>
          <CenterBlock tracks={[]} />
        </ReduxProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

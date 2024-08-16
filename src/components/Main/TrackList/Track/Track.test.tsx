
import { isEven, Track } from "./Track";
import renderer from "react-test-renderer";
import ReduxProvider from "../../../../store/ReduxProvider";

describe("track", () => {
  it("render track", () => {
    const track = {
      _id: 1,
      name: "Ora",
      author: "melo",
      release_date: "12-123-2",
      genre: ["1"],
      duration_in_seconds: 10,
      album: "qwetty",
      logo: null,
      track_file: "url/123",
      stared_user: [],
    };
    const tree = renderer
      .create(
        <ReduxProvider>
          <Track track={track} tracks={[]} />
        </ReduxProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("must determine even number",()=>{
    expect(isEven(6)).toBe(true)
    expect(isEven(5)).toBe(false)
    expect(isEven(10)).toBe(true)
    expect(isEven(5.5)).toBe(false)
    expect(isEven(0)).toBe(true)
  })
});

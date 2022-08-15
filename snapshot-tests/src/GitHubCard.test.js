import GitHubCard from "./GitHubCard";
import renderer from "react-test-renderer";

test("renders the bio, name, and profile picture to the file", () => {
    const tree = renderer.create(<GitHubCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

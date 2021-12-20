import { render } from "@testing-library/react";
import { Header } from "./Header";

test("renders component", () => {
  const component = render(<Header />);
  expect(component).toBeDefined();
});

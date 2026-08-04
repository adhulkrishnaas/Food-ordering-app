import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestrauntCard component with propsData", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Paradise");

  expect(name).toBeInTheDocument("Pizza Paradise");
});

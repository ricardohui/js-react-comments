import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});
it("should show a comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});

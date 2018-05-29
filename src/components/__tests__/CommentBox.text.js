import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});
it("has a text area and two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});
describe("testing Text Area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new Comment" }
    });
    wrapper.update();
  });
  it("should has a text area that users can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new Comment");
  });

  it("should clear the comment box text after submission", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});

import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("testing saveComment", () => {
  it("should have the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("should have the correct payload", () => {
    const action = saveComment("New Comment");

    expect(action.payload).toEqual("New Comment");
  });
});

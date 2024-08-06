import { renderHook ,waitFor} from "@testing-library/react";
import useFetch from "./useFetch";

// test initial value of useFetch hook
describe("useFetch", () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve());
    });
  it("should return the initial values for data", async () => {
    const { result } = renderHook(() => useFetch());
    const { data} = result.current;
    expect(data).toBe(null);
  });
});


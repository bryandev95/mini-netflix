import { shallowMount } from "@vue/test-utils";
import Input from "@/components/Input.vue";

const defaultProps = {
  name: "search",
  label: "",
  placeholder: "Search",
  value: "value",
};

describe("Input", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Input, {
      props: defaultProps,
    });
  });

  it("should have correct name", () => {
    expect(wrapper.find("input").element.name).toBe(defaultProps.name);
  });

  it("should have correct placeholder", () => {
    expect(wrapper.find("input").element.placeholder).toBe(
      defaultProps.placeholder
    );
  });

  it("should not have label if label props is not set", () => {
    expect(wrapper.find("label").exists()).toBe(false);
  });

  it("should have correct label", async () => {
    await wrapper.setProps({ label: "Search" });
    expect(wrapper.find("label").text()).toBe("Search");
  });

  it("snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

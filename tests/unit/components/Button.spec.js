import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

const defaultProps = {
  active: false,
  display: "",
  theme: "primary",
  onClick: () => null,
};

describe("Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button, {
      props: defaultProps,
    });
  });

  it("should render default text", () => {
    expect(wrapper.text()).toMatch("Button");
  });

  it("should have correct active classname", async () => {
    expect(wrapper.find(".button").classes()).not.toContain("active");
    await wrapper.setProps({ active: true });
    expect(wrapper.find(".button").classes()).toContain("active");
  });

  it("should have correct block classname", async () => {
    expect(wrapper.find(".button").classes()).not.toContain("block");
    await wrapper.setProps({ display: "block" });
    expect(wrapper.find(".button").classes()).toContain("block");
  });

  it("should have correct theme classname", async () => {
    expect(wrapper.find(".button").classes()).toContain("primary");
    await wrapper.setProps({ theme: "default" });
    expect(wrapper.find(".button").classes()).toContain("default");
  });

  it("should replace slot correctly", () => {
    wrapper = shallowMount(Button, {
      slots: {
        default: "ABC",
      },
      props: defaultProps,
    });
    expect(wrapper.text()).toMatch("ABC");
  });

  it("snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

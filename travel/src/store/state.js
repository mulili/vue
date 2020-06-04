import { selfLocalStorage } from "@utils";

const { getItem } = selfLocalStorage;

const state = {
  city: getItem("city") || "北京"
};
export default state;

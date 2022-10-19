import { atom } from "recoil";

export const searchedPhoto = atom({
  key: "searchedPhoto",
  default: [],
});

export const createdLabelArray = atom({
  key: "createdLabelArray",
  default: [],
});

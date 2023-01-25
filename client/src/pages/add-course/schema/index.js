import * as yup from "yup";

export const courseSchema = yup.object().shape({
  image: yup.string().required("pleace write image url").url("should be url"),
  name: yup.string().required("pleace write name"),
  title: yup.string().required("pleace write title"),
  author: yup.string().required("pleace write author"),
  authorImg: yup
    .string()
    .required("pleace write author image url")
    .url("should be url"),
  price: yup.number().required("pleace write course price"),
});

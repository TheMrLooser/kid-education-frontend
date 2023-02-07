import * as yup from "yup";

export const courseSchema = yup.object().shape({
  title: yup.string().required("Please provide a title"),
  description: yup.string().required("Please provide a description"),
  tags: yup.string().required("Please provide a tag"),
  price: yup.number().required("Please provide a price"),
  image: yup
    .mixed()

    .test("fileSize", "The file is too large", (file) => {
      return file && file.size <= 200000000000;
    }),
});

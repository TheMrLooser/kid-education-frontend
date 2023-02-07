import moment from "moment";
export const userCols = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    width: 160,
  },
];
export const videoCols = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "title",
    width: 250,
  },
  {
    field: "videoLink",
    headerName: "videoLink",
    width: "fit-content",
  },

  {
    field: "courseId",
    headerName: "CourseId",
    width: 350,
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 110,
  },
];

export const courseCols = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "courseName",
    headerName: "Name",
    width: 300,
  },
  {
    field: "catagory",
    headerName: "Catagory",
    width: 200,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 140,
    renderCell: (params) => {
      return <div>{moment(params.row.createdAt).format("MMM DD, YYYY")}</div>;
    },
  },
  {
    field: "updatedAt",
    headerName: "UpdatedAt",
    width: 140,
    renderCell: (params) => {
      return <div>{moment(params.row.updatedAt).format("MMM DD, YYYY")}</div>;
    },
  },
];

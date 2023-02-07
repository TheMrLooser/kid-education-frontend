import { InsertLink } from "@mui/icons-material";
import moment from "moment";
import { Link } from "react-router-dom";

export const vidCols = [
  {
    field: "name",
    headerName: "Name",
    width: 600,
  },
  {
    field: "link",
    headerName: "Link",
    width: "120",
    renderCell: (params) => {
      return (
        <div>
          <a href={params.row.link} target="_blank" rel="noopener noreferrer">
            <InsertLink sx={{ color: "blue" }} />
          </a>
        </div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 160,
    renderCell: (params) => {
      return <div>{moment(params.row.createdAt).format("MMMM DD, YYYY")}</div>;
    },
  },
  {
    field: "updatedAt",
    headerName: "UpdatedAt",
    width: 160,
    renderCell: (params) => {
      return <div>{moment(params.row.updatedAt).format("MMMM DD, YYYY")}</div>;
    },
  },
];

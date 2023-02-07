import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SearchCourse } from "../../API/api";
import { SearchButton, SearchField, SearchSection } from "./SearchBox.styles";

const SearchBox = ({ isSearch }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery(search.slice(3));
  }, [search]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <SearchSection search={isSearch}>
      <SearchField
        type="text"
        placeholder="Search courses"
        onChange={handleChange}
        value={searchQuery}
      />
      <SearchButton onClick={handleSubmit}>Search</SearchButton>
    </SearchSection>
  );
};

export default SearchBox;

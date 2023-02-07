import { FilterList } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { GetAllCoursesAPI, SearchCourse } from "../../API/api";
import {
  Container,
  GlobalStyles,
  SelectInput,
} from "../../components/CommonStyles";
import Header from "../../components/header/Header";
import SearchBox from "../../components/search field/SearchBox";
import SearchedCourse from "../../components/searched-course/SearchedCourse";
import { Line } from "../cart/Cart.styles";
import {
  FilterButton,
  FilterPart,
  FilterSection,
  filterStyles,
  ResultSection,
  Spinner,
  Wrapper,
} from "./Search.styles";

const Search = () => {
  const { search } = useLocation();
  const [maxPrice, setMaxPrice] = useState("2000");
  const [categoryState, setCategoryState] = useState(false);
  const [category, setCategory] = useState();
  const [openFilter, setOpenFilter] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const [courses, setCourses] = useState([]);

  const handleCategoryChange = (value) => {
    setCategoryState(true);
    setCategory(value);
  };

  const handlePriceChange = (value) => {
    setCategoryState(false);
    setMaxPrice(value);
  };

  const handleFilterToggle = () => {
    setOpenFilter((prev) => !prev);
    setCategoryState(false);
  };

  useEffect(() => {
    setSearchResult();
    const getData = async () => {
      const res = await SearchCourse(
        search.slice(3),
        category,
        parseInt(maxPrice)
      );
      setSearchResult(res.data);
    };
    getData();
  }, [search, maxPrice, category]);

  useEffect(() => {
    const getCategoryData = async () => {
      const res = await GetAllCoursesAPI(category);
      setCourses(res.data.courses);
    };
    getCategoryData();
  }, [category]);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <SearchBox isSearch="true" />
        <FilterPart>
          <FilterButton onClick={handleFilterToggle}>
            <FilterList sx={filterStyles} />
            Filter
          </FilterButton>
          {openFilter && (
            <FilterSection>
              <SelectInput
                name="category"
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={category}
              >
                <option value="">Category</option>
                <option value="ARTIFICIAL INTELLIGENCE (AI)">
                  Artificial Intelligence
                </option>
                <option value="CODING">Coding</option>
                <option value="ROBOTICS">Robotics</option>
                <option value="APP DEVELOPMENT">App Development</option>
                <option value="PHYSICAL COMPUTING">Physical Computing</option>
                <option value="INTERNET OF THINGS">Internet of things</option>
                <option value="AERO MODELLING & DRONES">
                  Areo Modelling & Drones
                </option>
              </SelectInput>

              <SelectInput
                name="price"
                onChange={(e) => handlePriceChange(e.target.value)}
                value={maxPrice}
              >
                <option value="500">Max 500rs</option>
                <option value="1000">max 1000rs</option>
                <option value="1500">Max 1500rs</option>
                <option value="2000">Max 2000rs</option>
              </SelectInput>
              <Line />
            </FilterSection>
          )}
        </FilterPart>
        <ResultSection>
          {categoryState ? (
            courses ? (
              courses.map((item) => {
                return (
                  <Link to={`/course/${item.id}`}>
                    <SearchedCourse data={item} />
                    <Line />
                  </Link>
                );
              })
            ) : (
              <Spinner>
                <CircularProgress color="inherit" />
              </Spinner>
            )
          ) : searchResult ? (
            searchResult.map((item) => {
              return (
                <Link to={`/course/${item.id}`}>
                  <SearchedCourse data={item} />
                  <Line />
                </Link>
              );
            })
          ) : (
            <Spinner>
              <CircularProgress color="inherit" />
            </Spinner>
          )}
        </ResultSection>
      </Wrapper>
    </Container>
  );
};

export default Search;

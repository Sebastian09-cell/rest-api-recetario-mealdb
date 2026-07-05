import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import type { Category, Meal, MealDetails, Searchform } from "./types";
import useHttpsData from "./hooks/useHttpsData";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const BaseUrl = `https://www.themealdb.com/api/json/v1/1/`;

const url = `${BaseUrl}list.php?c=list`;
const makeUrlMeal = (category: Category) =>
  `${BaseUrl}filter.php?c=${category.strCategory}`;
const deafaultstate = {
  strCategory: "Beef",
};

const MakeUrlSearch = (data: Searchform) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`;
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    fetch,
    loading: loadingmeals,
    data: datafetch,
  } = useFetch<MealDetails>();

  const SearchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${BaseUrl}lookup.php?i=${meal.idMeal}`);
  };
  const [search, setSearch] = useState<string>("");
  const [selectCategory, setSelectCategory] = useState<Category>(deafaultstate);
  const { data, loading } = useHttpsData<Category>(url);
  const { data: dataSearch, loading: loadingSearch } =
    useHttpsData<Meal>(search);
  const { data: dataMeal, loading: loadingMeal } = useHttpsData<Meal>(
    makeUrlMeal(selectCategory),
  );
  return (
    <>
      <Grid
        templateAreas={`"header header"
                    "nav main"
                    `}
        gridTemplateRows={"60px 1fr "}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          zIndex={1}
          pos="sticky"
          top="0"
          bg="white"
          area={"header"}
          boxShadow="lg"
        >
          <Header
            onSubmit={(data) => {
              setSearch(MakeUrlSearch(data));
            }}
            loading={loading}
          />
        </GridItem>
        <GridItem
          pos="sticky"
          top="60px"
          left="0"
          p={5}
          area={"nav"}
          height="calc(100vh - 60px)"
          overflowY="auto"
        >
          <SideNav
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            loading={loading}
            categories={data}
          />
        </GridItem>
        <GridItem p="4" bg="gray.200" area={"main"}>
          <MainContent
            onOpenModal={SearchMealDetails}
            meals={search ? dataSearch : dataMeal}
            loading={search ? loadingSearch : loadingMeal}
          />
        </GridItem>
      </Grid>
      <RecipeModal
        data={datafetch}
        loading={loadingmeals}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;

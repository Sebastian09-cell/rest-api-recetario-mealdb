import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import type { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectCategory: Category;
  setSelectCategory: (category: Category) => void;
};

const selecteProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

const SideNav = ({
  loading,
  categories,
  selectCategory,
  setSelectCategory,
}: Props) => {
  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={15} fontWeight="bolder" mb={4}>
        CATEGORIAS
      </Heading>

      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectCategory(c)}
            px={2}
            py={1}
            borderRadius={10}
            _hover={{ textDecoration: "none" }}
            key={c.strCategory}
            {...(selectCategory.strCategory == c.strCategory && selecteProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;

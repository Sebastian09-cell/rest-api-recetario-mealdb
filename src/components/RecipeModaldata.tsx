import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Text,
  Heading,
  OrderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import type { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredient !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

const RecipeModaldata = ({ data }: Props) => {
  const ingredientes = joinIngredients(data);
  console.log(ingredientes);

  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image alt={data.strMeal} width="100%" src={data.strMealThumb} />
      </ModalBody>
      <Heading mt={4} mb={4} size="md">
        Ingredientes
      </Heading>
      <Text>{data.strInstructions}</Text>

      <OrderedList>
        {ingredientes.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
      </OrderedList>
      <Link href={data.strYoutube} isExternal color="blue.500">
        Ver receta en YouTube
      </Link>
    </>
  );
};

export default RecipeModaldata;

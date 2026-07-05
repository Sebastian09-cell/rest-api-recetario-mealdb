import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  CardFooter,
  Button,
} from "@chakra-ui/react";

import type { Meal } from "../types";

type Props = {
  meal: Meal;
  onOpenModal: () => void;
};

const MealCard = ({ meal, onOpenModal }: Props) => {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          src={meal.strMealThumb}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Heading size="md" color="blue.400">
          <Text mt={4}>
            {meal.strMeal} - {meal.strCountry}
          </Text>
        </Heading>
      </CardBody>
      <CardFooter pt={0}>
        <Button
          onClick={onOpenModal}
          variant="solid"
          color="white"
          bg="blue.400"
        >
          ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;

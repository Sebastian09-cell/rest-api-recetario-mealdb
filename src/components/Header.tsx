import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import type { Searchform } from "../types";

type Props = {
  onSubmit: (data: Searchform) => void;
  loading: boolean;
};

const Header = ({ onSubmit, loading }: Props) => {
  const { register, formState, handleSubmit } = useForm<Searchform>();
  return loading ? (
    <Container mt={3} maxW="3xl">
      <Skeleton>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
    </Container>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container mt={3} maxW="3xl">
        <InputGroup flex="1">
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            focusBorderColor={!!formState.errors.search ? "red" : "blue.400"}
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="tel"
            placeholder="Intenta con 'Chiken' o 'Beef'"
          />
          <Button ml={2} colorScheme="blue" type="submit">
            Buscar
          </Button>
        </InputGroup>
      </Container>
    </form>
  );
};

export default Header;

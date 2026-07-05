import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {};

const SkeletonModal = ({}: Props) => {
  return (
    <Container>
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="4" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="280" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Container>
  );
};

export default SkeletonModal;

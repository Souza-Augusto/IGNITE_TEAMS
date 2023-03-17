import { Container, Logo, BackButton, BackIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.navigate("Groups")}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={require("../../assets/logo.png")} />
    </Container>
  );
}

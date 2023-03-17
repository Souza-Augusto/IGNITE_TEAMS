import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useCallback } from "react";
import { Loading } from "@components/Loading";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      setLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleOpenGroup(group: string) {
    navigation.navigate("Players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}
      <Button onPress={handleNewGroup} title="Criar nova turma" />
    </Container>
  );
}

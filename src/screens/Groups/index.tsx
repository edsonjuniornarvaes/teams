import { Container } from "@screens/Groups/styles";
import { GroupCard } from "src/components/GroupCard";
import { Header } from "src/components/header";
import { Highlight } from "src/components/Highlight";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}

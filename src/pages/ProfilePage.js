import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

function ProfilePage() {
  const {name} = useParams()
  return (
    <section>
      <Header/>
      <h1>Página de perfil de {name}</h1>
    </section>
  );
}

export default ProfilePage;


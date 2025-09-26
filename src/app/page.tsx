import NavBar from "@/components/NavBar/NavBar";
import Home from "@/components/Home/Home";
import { Container } from "@/components/Container/Container";
export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home/>
      </Container>
    </>
  );
}

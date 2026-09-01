import { Box } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/LoginForm";
import { login } from "./services/login";

function App() {
  return (
    <Box minH="100vh" bg="dio.canvas" color="dio.text">
      <Header />

      <Box
        as="main"
        display="grid"
        placeItems="center"
        minH="calc(100dvh - 72px)"
        px={{ base: "4", md: "8" }}
        py={{ base: "8", md: "16" }}
      >
        <Card>
          <LoginForm onSubmit={() => login()} />
        </Card>
      </Box>
    </Box>
  );
}

export default App;

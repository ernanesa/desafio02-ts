import { Box } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/LoginForm";
import { login } from "./services/login";

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />

      <Box as="main" display="flex" justifyContent="center" px="4" py="12">
        <Card>
          <LoginForm onSubmit={() => login()} />
        </Card>
      </Box>
    </Box>
  );
}

export default App;

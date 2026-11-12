import { ThemeProvider, type DefaultTheme } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { ContainerStyled } from "./components/styles/container.styled";
import GlobalStyle from "./components/styles/global";
import content from "./components/content";

const theme: DefaultTheme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContainerStyled>
        {content.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ContainerStyled>
      <Footer />
    </ThemeProvider>
  )
}

export default App
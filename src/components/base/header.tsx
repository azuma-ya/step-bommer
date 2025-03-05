import { Container } from "../layout/container";
import { ThemeToggleButton } from "../ui/theme-toggle-button";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 inset-x-0 bg-background/50 backdrop-blur-xs h-(--header-height) ">
      <Container
        maxWidth="xl"
        className="flex items-center justify-between h-full"
      >
        <Navigation className="hidden md:flex" />
        <div className="flex items-center gap-2">
          <ThemeToggleButton variant="ghost" />
        </div>
      </Container>
    </header>
  );
};

export const HeaderSpacing = () => {
  return <div className="h-(--header-height)" />;
};

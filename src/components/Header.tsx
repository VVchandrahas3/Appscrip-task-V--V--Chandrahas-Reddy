import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const navLinks = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-medium hover:underline"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <a href="/" className="text-2xl font-bold tracking-tight">
              LOGO
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium hover:underline transition-all"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            <Select defaultValue="eng">
              <SelectTrigger className="w-[80px] border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">ENG</SelectItem>
                <SelectItem value="esp">ESP</SelectItem>
                <SelectItem value="fra">FRA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

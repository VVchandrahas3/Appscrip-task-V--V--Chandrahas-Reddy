import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  isOutOfStock?: boolean;
}

const ProductCard = ({ title, price, image, isNew, isOutOfStock }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              NEW PRODUCT
            </Badge>
          )}
          {isOutOfStock && (
            <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
              OUT OF STOCK
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground">
          <a href="#" className="hover:underline">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-0 right-0 h-8 w-8"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

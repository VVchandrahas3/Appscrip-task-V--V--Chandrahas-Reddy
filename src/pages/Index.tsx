import { useState, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Helmet } from "react-helmet";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    // Fetch products from FakeStore API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Discover Our Products",
    "description": "Explore our curated collection of premium products including fashion accessories, bags, and lifestyle items",
    "url": window.location.href,
    "numberOfItems": products.length,
  };

  return (
    <>
      <Helmet>
        <title>Discover Our Products | Premium Fashion & Accessories</title>
        <meta
          name="description"
          content="Explore our curated collection of premium products including fashion accessories, bags, and lifestyle items. Free shipping on orders over $50."
        />
        <meta name="keywords" content="fashion, accessories, bags, premium products, online shopping" />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="border-b">
            <div className="container mx-auto px-4 py-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                DISCOVER OUR PRODUCTS
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Curated collections crafted with care. Each piece tells a story of artistry, 
                sustainability, and timeless design. Shop consciously, live beautifully.
              </p>
            </div>
          </section>

          {/* Filters & Products Section */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar - Desktop */}
              <div className="hidden lg:block">
                <FilterSidebar isOpen={true} onClose={() => {}} />
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="lg:hidden"
                      onClick={() => setFilterOpen(true)}
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      FILTERS
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{products.length} ITEMS</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFilters(!showFilters)}
                      className="hidden lg:flex"
                    >
                      <ChevronDown className={`h-4 w-4 mr-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                      {showFilters ? 'HIDE' : 'SHOW'} FILTER
                    </Button>
                  </div>

                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">RECOMMENDED</SelectItem>
                      <SelectItem value="newest">NEWEST FIRST</SelectItem>
                      <SelectItem value="popular">POPULAR</SelectItem>
                      <SelectItem value="price-low">PRICE: LOW TO HIGH</SelectItem>
                      <SelectItem value="price-high">PRICE: HIGH TO LOW</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mobile Filter Sidebar */}
                {filterOpen && (
                  <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
                    <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
                  </div>
                )}

                {/* Products Grid */}
                {loading ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="aspect-square bg-muted animate-pulse rounded" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {products.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        {...product}
                        isNew={index % 5 === 0}
                        isOutOfStock={index % 7 === 0}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;

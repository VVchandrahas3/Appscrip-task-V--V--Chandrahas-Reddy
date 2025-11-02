import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-primary-foreground/20">
          <div>
            <h3 className="text-lg font-semibold mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-sm mb-4 opacity-80">Sign up for updates from mettā muse.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p className="text-sm mb-2">+44 221 133 5360</p>
            <p className="text-sm mb-4">customercare@mettamuse.com</p>
            
            <h4 className="text-sm font-semibold mb-2">CURRENCY</h4>
            <Select defaultValue="usd">
              <SelectTrigger className="w-[140px] bg-primary-foreground text-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">🇺🇸 USD</SelectItem>
                <SelectItem value="eur">🇪🇺 EUR</SelectItem>
                <SelectItem value="gbp">🇬🇧 GBP</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs mt-2 opacity-60">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">mettā muse</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Stories</a></li>
              <li><a href="#" className="hover:underline">Artisans</a></li>
              <li><a href="#" className="hover:underline">Boutiques</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Orders & Shipping</a></li>
              <li><a href="#" className="hover:underline">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:underline">Payment & Pricing</a></li>
              <li><a href="#" className="hover:underline">Return & Refunds</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex gap-3 mb-6">
              <Button variant="ghost" size="icon" className="border border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="border border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>

            <h4 className="text-sm font-semibold mb-3">mettā muse ACCEPTS</h4>
            <div className="flex flex-wrap gap-2">
              {["Visa", "Mastercard", "PayPal", "Amex", "Apple Pay", "Shop Pay"].map((payment) => (
                <div
                  key={payment}
                  className="px-2 py-1 bg-primary-foreground text-primary text-xs font-medium rounded"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

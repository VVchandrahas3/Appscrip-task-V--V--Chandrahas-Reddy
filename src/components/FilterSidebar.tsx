import { ChevronDown, ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  const filters = [
    {
      title: "IDEAL FOR",
      options: ["All", "Men", "Women", "Baby & Kids"],
    },
    {
      title: "OCCASION",
      options: ["All"],
    },
    {
      title: "WORK",
      options: ["All"],
    },
    {
      title: "FABRIC",
      options: ["All"],
    },
    {
      title: "SEGMENT",
      options: ["All"],
    },
    {
      title: "SUITABLE FOR",
      options: ["All"],
    },
    {
      title: "RAW MATERIALS",
      options: ["All"],
    },
    {
      title: "PATTERN",
      options: ["All"],
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } lg:block w-full lg:w-64 border-r bg-background`}
    >
      <div className="p-4 space-y-4">
        {/* Mobile Close Button */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <h2 className="font-semibold">FILTERS</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Customizable */}
        <div className="flex items-center space-x-2">
          <Checkbox id="customizable" />
          <Label
            htmlFor="customizable"
            className="text-sm font-medium cursor-pointer"
          >
            CUSTOMIZABLE
          </Label>
        </div>

        {/* Filter Groups */}
        {filters.map((filter, index) => (
          <Collapsible key={index} defaultOpen={index === 0}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
              <span className="text-sm font-medium">{filter.title}</span>
              <ChevronDown className="h-4 w-4 transition-transform ui-expanded:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 space-y-2">
              {filter.options.map((option, optIndex) => (
                <div key={optIndex} className="text-sm text-muted-foreground pl-2">
                  {option}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;

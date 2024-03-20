import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface DataContainerProps {
  product: {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: {
      customer: string;
      review: string;
      score: number;
    }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: {
      weekEnding: string;
      retailSales: number;
      wholesaleSales: number;
      unitsSold: number;
      retailerMargin: number;
    }[];
  }[];
}

const DataContainer: React.FC<DataContainerProps> = ({ product }) => {
  const item = product[0];
  return (
    <div className="h-[84vh] w-[35%] drop-shadow-lg">
      <div className="flex h-full flex-col items-center gap-3 bg-white pt-3">
        <Image
          src={item?.image ?? ""}
          alt="product image"
          width={128}
          height={128}
          className=""
        ></Image>
        <div className="mx-4 text-xl font-bold">{item?.title}</div>
        <div className="mx-4 text-center text-sm font-light">
          {item?.subtitle}
        </div>
        <div className="w-full border-b border-t border-gray-200 px-3 pb-4 pt-3">
          {item?.tags.map((tag) => (
            <Badge className="mx-1 mt-2" variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;

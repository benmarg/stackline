import React from "react";

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
  return <div>{item?.id}</div>;
};

export default DataContainer;

"use client";

import { type ColumnDef } from "@tanstack/react-table";

export type Sales = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "weekEnding",
    header: "Week Ending",
  },
  {
    accessorKey: "retailSales",
    header: "Retail Sales",
  },
  {
    accessorKey: "wholesaleSales",
    header: "Amount",
  },
  {
    accessorKey: "unitsSold",
    header: "Units Sold",
  },
  {
    accessorKey: "retailerMargin",
    header: "Retailer Margin",
  },
];

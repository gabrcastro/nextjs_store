import config from "@/config";
import apiParams from "./api.constants";
import { ProductModel } from "../domain/model/product.model";

interface FetchProductsParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

interface FetchProductsResponse {
  data: ProductModel[];
  total: number;
}

export async function fetchProducts(
  params: FetchProductsParams
): Promise<FetchProductsResponse> {
  try {
    const url = new URL(config.apiUrl + "/products");
    url.searchParams.append(apiParams.PAGE, params.page.toString());
    url.searchParams.append(apiParams.ROWS, params.rows.toString());
    url.searchParams.append(apiParams.SORT_BY, params.sortBy);
    url.searchParams.append(apiParams.ORDER_BY, params.orderBy);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }

    const data = await response.json();
    console.log('API response:', data);

    return {
      data: data.products,
      total: data.total,
    };

  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
}

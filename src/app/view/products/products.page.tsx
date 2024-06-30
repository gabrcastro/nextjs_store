"use client";
import { fetchProducts } from '@/app/data/api';
import StoreItemComponent from "@/app/view/components/store_item.component";
import { useEffect, useState } from "react";
import apiParams from '@/app/data/api.constants';

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts({
          page: 1,
          rows: 15,
          sortBy: apiParams.NAME,
          orderBy: apiParams.ASC,
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

useEffect(() => {
  console.log("PRODUCTS");
  console.log(products.toString());
}, [products]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-full grid grid-cols-4 gap-5">
        {products.map((product) => (
          <StoreItemComponent key={product.id} product={product} /> 
        ))}
      </div>
    </main>
  );
}

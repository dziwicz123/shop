import React from "react";
import ProductGrid from "../components/ProductGrid";

function ProductZone() {
    const products = [
      { id: 1, name: "Xiaomi Redmi Note 13", price: "777,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_16_8_54_1_713_10.jpg" },
      { id: 2, name: "Apple iPad Pro 11\" M4", price: "5 299,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/5/pr_2024_5_7_18_10_34_599_00.jpg" },
      { id: 3, name: "Samsung Odyssey G5 S27CG552EUX", price: "1099,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/4/pr_2024_4_26_7_30_28_725_00.jpg" },
      { id: 4, name: "ASUS GeForce RTX 3070 DUAL OC V2 LHR 8GB GDDR6", price: "2 369,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_11_15_48_54_57_00.jpg" },
      { id: 5, name: "Xiaomi Redmi Note 13", price: "777,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_16_8_54_1_713_10.jpg" },
      { id: 6, name: "Apple iPad Pro 11\" M4", price: "5 299,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/5/pr_2024_5_7_18_10_34_599_00.jpg" },
      { id: 7, name: "Samsung Odyssey G5 S27CG552EUX", price: "1099,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/4/pr_2024_4_26_7_30_28_725_00.jpg" },
      { id: 8, name: "ASUS GeForce RTX 3070 DUAL OC V2 LHR 8GB GDDR6", price: "2 369,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_11_15_48_54_57_00.jpg" },
  
    ];
    return (
        <>
            <ProductGrid products={products} />
        </>
    );
}
export default ProductZone;
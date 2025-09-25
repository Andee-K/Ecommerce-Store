import React from "react";
import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct}></ProductDetail>;
}

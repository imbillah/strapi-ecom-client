import React, { useEffect, useState } from "react";
import { fetchData } from "@/libs/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Wrapper, ProductCard } from "@/components";
const maxResult = 3;
const Caterory = ({ category, products, slug }) => {
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* products grid end */}
      </Wrapper>
    </div>
  );
};

export default Caterory;

export async function getStaticPaths() {
  const category = await fetchData("/api/categories?populate=*");

  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchData(
    `/api/categories/?filters[slug][$eq]=${slug}`
  );
  const products = await fetchData(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`
  );
  return {
    props: {
      category,
      products,
      slug,
    },
  };
}

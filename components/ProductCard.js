import { getDiscountedPercentage } from "@/libs/helper";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-gray-200 rounded-md duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={400}
        height={400}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">${p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                ${p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

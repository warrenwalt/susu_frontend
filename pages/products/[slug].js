import Image from "next/image";
import { useRouter } from "next/router";
import DefaultLayout from "../../common/components/layout";
import WearWith from "../../common/components/wearWith";
import InfoCard from "../../common/components/infoCard";
import Chat from "../../common/components/chat";
import axiosInstance from "../../lib/axios";
import FilterForm from "../../common/components/filterForm";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex justify-center space-x-12 ml-20 -mr-5">
        <div className="w-1/2 flex flex-col space-y-8 justify-center">
          <Image src="/dress1.jpg" alt="my bag" width={550} height={200} />
          <Image
            src="/dress1 closeup.jpg"
            alt="my bag"
            width={500}
            height={200}
          />
          <Image src="/dress1 back.jpg" alt="my bag" width={500} height={200} />
          <Image src="/dress1front.jpg" alt="my bag" width={500} height={200} />
          {/* wear with */}
          <WearWith />
        </div>
        <div className="mt-10 space-y h-fit">
          <div className="font-bold">{product.name}</div>
          <div className="font-light">Orange</div>
          <div className="flex space-x-4 font-light">
            <div className="font-bold">$20.00</div>
            <div className="text-gray-500 font-semibold">$30.00</div>
            <div className="text-red-500 font-semibold">-20%</div>
          </div>
          <div className="mt-2 border-b border-black">select size</div>
          <div className="flex flex-col space-y-2 mt-2 w-fit text-xs font-bold">
            <button className="rounded-full border border-black px-2 py-1">
              S
            </button>
            <button>M</button>
            <button>L</button>
          </div>
          <div>
            <button className="border-2 px-14 py-2 uppercase mt-6 rounded-full border-black text-xs">
              Add
            </button>
          </div>
          <div className="pt-10">
            <FilterForm w={"w-full"} border_b={"border-b border-black"} />
            <FilterForm w={"w-full"} border_b={"border-b border-black"} />
            <FilterForm w={"w-full"} border_b={"border-b border-black"} />
          </div>
        </div>
      </div>
      {/* similar items */}
      <div className="flex flex-col justify-center md:ml-48 pt-20 space-y-6">
        <div className="uppercase font-bold text-3xl">similar items</div>
        <div className="flex space-x-3 justify-start w-ful">
          <Image src="/similar3.jpg" alt="bag" width={200} height={200} />
          <Image src="/similar3.jpg" alt="bag" width={200} height={200} />
          <Image src="/similar3.jpg" alt="bag" width={200} height={200} />
        </div>
      </div>
      {/* chat */}
      <Chat />
      <InfoCard />
      {/*  */}
    </DefaultLayout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { data: product } = await axiosInstance.get(`/products/${slug}`);

  return {
    props: product,
  };
}

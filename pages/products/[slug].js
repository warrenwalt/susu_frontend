import { useRouter } from "next/router";
import axiosInstance from "../../lib/axios";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{JSON.stringify(product.categories)}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { data: product } = await axiosInstance.get(`/products/${slug}`);

  return {
    props: product,
  };
}

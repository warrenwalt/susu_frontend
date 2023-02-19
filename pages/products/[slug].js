import { useRouter } from "next/router";
import DefaultLayout from "../../common/components/layout";
import axiosInstance from "../../lib/axios";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{JSON.stringify(product.categories)}</p>
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

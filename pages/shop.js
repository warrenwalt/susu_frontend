import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chat from "../common/components/chat";
import FilterForm from "../common/components/filterForm";
import DefaultLayout from "../common/components/layout";
import ProductCard from "../common/components/productCard";

export default function Shop() {
  return (
    <DefaultLayout>
      <div className="container mt-14">
        <div className="flex justify-end space-x-6">
          <aside className="mt-28">
            <h1>Dresses</h1>
            <h2>filters</h2>
            <div className="space-y-4">
              <FilterForm w={"w-10"} />
              <FilterForm w={"w-10"} />
              <FilterForm w={"w-10"} />
              <FilterForm w={"w-10"} />
              <FilterForm w={"w-10"} />
            </div>
          </aside>
          <main className="">
            <div className="w-10/12">
              <h1 className="font-bold uppercase">Woman</h1>
              <p>
                Laboris est occaecat mollit mollit cillum incididunt deserunt
                magna ex esse proident. welknfaerf wriothgaeribg
              </p>
            </div>
            <div className="flex justify-start mt-6 mb-2 space-X-8">
              <FilterForm />
              <FilterForm />
              <FilterForm />
              <FilterForm />
              <FilterForm />
            </div>
            <div className="flex space-x-3">
              <ProductCard w={"w-3/12"} showColor={true} showLike={true} />
              <ProductCard w={"w-3/12"} showColor={true} showLike={true} />
              <ProductCard w={"w-3/12"} showColor={true} showLike={true} />
            </div>
          </main>
        </div>
        <div>
          <p className="flex justify-center mt-24">
            <FontAwesomeIcon icon={faAngleDown} size="3x" />
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="w-fit bg-black text-white text-sm py-2 px-6 rounded-full">
            Load more products
          </button>
        </div>
        <Chat />
      </div>
    </DefaultLayout>
  );
}

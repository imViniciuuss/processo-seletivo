import Header from "./_components/Header";
import OrderTable from "./_components/order-table";

export default async function Home() {
  return (
    <>
    <Header />
    <main className="w-full h-[calc(auto-4rem)] py-6 px-5">
      <div className="h-auto container flex flex-col ">
        <h1 className="text-3xl font-bold tracking-tighter">Manage products</h1>
        <p className="text-gray-500">Import and export your products with ease.</p>
        <div className="flex flex-col gap-8 mt-8">
          <OrderTable />
        </div>
      </div>
    </main>
    </>
  );
}

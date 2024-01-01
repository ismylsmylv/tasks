export default function ProductDetials({
  params,
}: {
  params: { productID: string };
}) {
  return <h1>Prod details {params.productID}</h1>;
}

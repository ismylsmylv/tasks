import { Metadata } from "next";

export const generateMetadata = async ({ params }: Props): Metadata => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`order ${params.productID}`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};

type Props = {
  params: {
    productID: string;
  };
};

export default function ProductDetials({ params }: Props) {
  return <h1>Prod details {params.productID}</h1>;
}

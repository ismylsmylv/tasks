import { Metadata } from "next";

type Props = {
  params: {
    productID: string;
  };
};

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`order ${params.productID}`);
    }, 100);
  });

  return {
    title: `product ${title}`,
  };
};

const random = getRandomInt(2);

if (random === 1) {
  throw new Error("Error loading data");
}

export default function ProductDetails({ params }: Props) {
  return <h1>Prod details {params.productID}</h1>;
}

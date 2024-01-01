import { notFound } from "next/navigation";
export default function ReviewId({
  params,
}: {
  params: {
    productID: String;
    reviewId: String;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review for {params.productID} with review of {params.reviewId}
    </h1>
  );
}

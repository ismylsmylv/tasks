export default function ReviewId({
  params,
}: {
  params: {
    productID: String;
    reviewId: String;
  };
}) {
  return (
    <h1>
      Review for {params.productID} with review of {params.reviewId}
    </h1>
  );
}

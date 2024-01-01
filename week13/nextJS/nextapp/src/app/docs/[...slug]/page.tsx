export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length == 3) {
    return (
      <h1>
        docs for feature {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  }
  return <h1>Docs page</h1>;
}

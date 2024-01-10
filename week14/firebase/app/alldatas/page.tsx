import firestore from "./firebase";
function Home(props) {
  const { entries } = props; 
  return <h1>entries.title</h1>;
}
export async function getServerSideProps() {
  const entries = await firestore.collection("blogs").get();
  const entriesData = entries.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return {
    props: { entries: entriesData },
  };
}

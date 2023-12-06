import DataTable from "./Table";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Component1Props {
  data: Post[];
}


const ShowTable = ({ data }: Component1Props) => {
  const posts: Post[] = data;
  return <DataTable tableData={posts} />;
};

export default ShowTable;

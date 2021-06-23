import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { CustomModal } from "../Components/Modal";
import { mapsAPI } from "../service";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  { title: "style", dataIndex: "style" },
  {
    title: "dataseCount",
    dataIndex: "dataseCount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.dataseCount - b.dataseCount,
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "EditAt",
    dataIndex: "EditAt",
  },
];

const Maps = () => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    "maps",
    mapsAPI.getMaps
  );

  return (
    <>
      <CustomModal button={<Button>Create Map</Button>} content={<>create</>} />
      {isError ? (
        <p>{error}</p>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          loading={isFetching || isLoading}
        />
      )}
    </>
  );
};

export default Maps;

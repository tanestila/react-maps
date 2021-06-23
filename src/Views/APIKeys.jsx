import { Button, Space, Table } from "antd";
import { useQuery } from "react-query";
import { CustomModal } from "../Components/Modal";
import { mapsAPI } from "../service";
const columns = [
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Action",
    key: "action",
    render: (text) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const APIKeys = () => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    "api-keys",
    mapsAPI.getAPIKeys
  );

  return (
    <>
      <CustomModal
        button={<Button>Create API key</Button>}
        content={<>create</>}
      />
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
export default APIKeys;

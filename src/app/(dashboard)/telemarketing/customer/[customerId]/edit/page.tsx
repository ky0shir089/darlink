import { customerShow } from "@/data/customer";
import Unauthorized from "@/components/unauthorized";
import CustomerDetail from "../../_components/CustomerDetail";

type Params = Promise<{ customerId: number }>;

const EditcustomerPage = async ({ params }: { params: Params }) => {
  const { customerId } = await params;
  const result = await customerShow(customerId);
  if (result.isForbidden) {
    return <Unauthorized />;
  }
  const { data } = result;

  return <CustomerDetail data={data} />;
};

export default EditcustomerPage;

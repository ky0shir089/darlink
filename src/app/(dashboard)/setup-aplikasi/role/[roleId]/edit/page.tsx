import { roleShow } from "@/data/role";
import RoleForm from "../../_components/RoleForm";
import Unauthorized from "@/components/unauthorized";
import { selectMenuPermission } from "@/data/select";

type Params = Promise<{ roleId: number }>;

const EditRolePage = async ({ params }: { params: Params }) => {
  const { roleId } = await params;
  const result = await roleShow(roleId);
  if (result.isForbidden) {
    return <Unauthorized />;
  }
  const { data } = result;
  const { data: menuPermission } = await selectMenuPermission();

  return <RoleForm data={data} menuPermission={menuPermission} />;
};

export default EditRolePage;

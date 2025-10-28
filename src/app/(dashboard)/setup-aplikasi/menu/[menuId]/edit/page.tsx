import MenuForm from "../../_components/MenuForm";
import { selectModule } from "@/data/select";
import Unauthorized from "@/components/unauthorized";
import { menuShow } from "@/data/menu";

type Params = Promise<{ menuId: number }>;

const EditMenuPage = async ({ params }: { params: Params }) => {
  const { menuId } = await params;
  const result = await menuShow(menuId);
  if (result.isForbidden) {
    return <Unauthorized />;
  }
  const { data } = result;
  const modules = await selectModule();

  return <MenuForm id={menuId} data={data} modules={modules.data} />;
};

export default EditMenuPage;

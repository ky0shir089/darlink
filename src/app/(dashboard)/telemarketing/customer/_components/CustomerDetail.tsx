import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import CustomerInfo from "./CustomerInfo";
import Vehicle from "./Vehicle";
import Order from "./Order";
import Call from "./Call";

interface CustomerDetailProps {
  id_type: string;
  nik: string;
  name: string;
  birthplace: string;
  birthdate: string;
  gender: string;
  address: string;
  province: string;
  regency: string;
  district: string;
  village: string;
  postal_code: string;
  religion: string;
  education: string;
  marital_status: string;
  house_status: string;
  job: string;
  salary: number;
  vehicles: {
    id: number;
    vehicle_type: string;
    number_plate: string;
    bpkb_no: string;
    bpkb_name: string;
    brand: string;
    model: string;
    type: string;
    year: string;
    color: string;
    chassis_number: string;
    engine_number: string;
    price: number;
    fincoy: string;
  }[];
  orders: {
    id: number;
    company: string;
    branch_code: string;
    branch_name: string;
    outlet_code: string;
    outlet_sys_code: string;
    outlet_name: string;
    order_no: string;
    order_date: string;
    order_amount: number;
    installments: number;
    interval: number;
    remaining: number;
    total: number;
    period: string;
    pv_no: string;
    rv_no: string;
    rv_date: string;
    fee_scheme: number;
    fee_matrix: number;
    fee_mediator: number;
    pv_fee_matrix: string;
    reason_disbursement: string;
    source: string;
    fincoy: string;
  }[];
  calls: {
    id: number;
    campaign_name: string;
    agent_name: string;
    call_time: string;
    duration: string;
    category_status: string;
    status_call: string;
    remarks: string;
  }[];
}

const CustomerDetail = ({
  data: { vehicles, orders, calls, ...customer },
}: {
  data: CustomerDetailProps;
}) => {
  return (
    <Tabs defaultValue="customer" className="max-auto w-full">
      <TabsList className="w-full h-14">
        <TabsTrigger value="customer">Konsumen</TabsTrigger>
        <TabsTrigger value="vehicle">Kendaraan</TabsTrigger>
        <TabsTrigger value="order">Order</TabsTrigger>
        <TabsTrigger value="call">Call</TabsTrigger>
      </TabsList>

      <TabsContent value="customer">
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-2xl")}>Data Konsumen</CardTitle>
          </CardHeader>

          <CardContent>
            <CustomerInfo customer={customer} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="vehicle">
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-2xl")}>Kendaraan</CardTitle>
          </CardHeader>

          <CardContent>
            <Vehicle vehicles={vehicles} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="order">
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-2xl")}>Order</CardTitle>
          </CardHeader>

          <CardContent>
            <Order orders={orders} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="call">
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-2xl")}>Call</CardTitle>
          </CardHeader>

          <CardContent>
            <Call calls={calls} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CustomerDetail;

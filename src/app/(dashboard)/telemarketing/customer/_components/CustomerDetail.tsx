import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import CustomerInfo from "./CustomerInfo";
import Vehicle from "./Vehicle";
import Order from "./Order";
import Call from "./Call";
import { customerShowType } from "@/data/customer";

const CustomerDetail = ({
  data: { vehicles, orders, calls, ...customer },
}: {
  data: customerShowType;
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

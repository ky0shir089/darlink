import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface OrderProps {
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
}

const Order = ({ orders }: OrderProps) => {
  return (
    <div className="space-y-8">
      {orders.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Perusahaan</TableHead>
                  <TableCell>{item.company}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Cabang</TableHead>
                  <TableCell>
                    {item.branch_code} - {item.branch_name}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Titik</TableHead>
                  <TableCell>
                    {item.outlet_code} - {item.outlet_sys_code} -{" "}
                    {item.outlet_name}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Nomor Order</TableHead>
                  <TableCell>{item.order_no}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Tanggal Order</TableHead>
                  <TableCell>{item.order_date}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Amount Talangan</TableHead>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.order_amount)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Angsuran</TableHead>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.installments)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Jarak Angsuran</TableHead>
                  <TableCell>{item.interval}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Jumlah Angsuran</TableHead>
                  <TableCell>{item.total}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Sisa angsuran</TableHead>
                  <TableCell>{item.remaining}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Periode Angsuran</TableHead>
                  <TableCell>{item.period}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>No Invoice</TableHead>
                  <TableCell>{item.pv_no}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>No Pembayaran</TableHead>
                  <TableCell>{item.rv_no}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Tgl Pembayaran</TableHead>
                  <TableCell>{item.rv_date}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Fee Matrix</TableHead>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.fee_matrix)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Fee Mediator</TableHead>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.fee_mediator)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>No Invoce Fee Matrix</TableHead>
                  <TableCell>{item.fincoy}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Reason Disbursement</TableHead>
                  <TableCell>{item.reason_disbursement}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableCell>{item.source}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Order;

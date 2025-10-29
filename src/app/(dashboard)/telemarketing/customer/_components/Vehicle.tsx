import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface VehicleProps {
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
}

const Vehicle = ({ vehicles }: VehicleProps) => {
  return (
    <div className="space-y-8">
      {vehicles.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Jenis Kendaraan</TableHead>
                  <TableCell>{item.vehicle_type}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>NOPOL</TableHead>
                  <TableCell>{item.number_plate}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>NOKA</TableHead>
                  <TableCell>{item.chassis_number}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>NOSIN</TableHead>
                  <TableCell>{item.engine_number}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Nomor BPKB</TableHead>
                  <TableCell>{item.bpkb_no}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Nama BPKB</TableHead>
                  <TableCell>{item.bpkb_name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Merk</TableHead>
                  <TableCell>{item.brand}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableCell>{item.model}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableCell>{item.type}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Tahun</TableHead>
                  <TableCell>{item.year}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Warna</TableHead>
                  <TableCell>{item.color}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Harga</TableHead>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Fincoy</TableHead>
                  <TableCell>{item.fincoy}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Vehicle;

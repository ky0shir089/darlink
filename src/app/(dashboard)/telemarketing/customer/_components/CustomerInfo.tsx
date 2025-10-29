import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface CustomerInfoProps {
  customer: {
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
  };
}

const CustomerInfo = ({ customer }: CustomerInfoProps) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHead>ID Type</TableHead>
          <TableCell>{customer.id_type}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>NIK</TableHead>
          <TableCell>{customer.nik}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Nama</TableHead>
          <TableCell>{customer.name}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Tempat/Tgl Lahir</TableHead>
          <TableCell>
            {customer.birthplace}, {customer.birthdate}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Jenis Kelamin</TableHead>
          <TableCell>{customer.gender}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Alamat</TableHead>
          <TableCell>{customer.address}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Provinsi</TableHead>
          <TableCell>{customer.province}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Kota/Kabupaten</TableHead>
          <TableCell>{customer.regency}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Kecamatan</TableHead>
          <TableCell>{customer.district}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Kelurahan</TableHead>
          <TableCell>{customer.village}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Kodepos</TableHead>
          <TableCell>{customer.postal_code}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Agama</TableHead>
          <TableCell>{customer.religion}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Pendidikan</TableHead>
          <TableCell>{customer.education}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Status Perkawinan</TableHead>
          <TableCell>{customer.marital_status}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Status Rumah</TableHead>
          <TableCell>{customer.house_status}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Pekerjaan</TableHead>
          <TableCell>{customer.job}</TableCell>
        </TableRow>

        <TableRow>
          <TableHead>Gaji</TableHead>
          <TableCell>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(customer.salary)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CustomerInfo;

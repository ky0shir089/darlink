import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface CallProps {
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

const Call = ({ calls }: CallProps) => {
  return (
    <div className="space-y-8">
      {calls.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableCell>{item.campaign_name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Agent Name</TableHead>
                  <TableCell>{item.agent_name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Call Time</TableHead>
                  <TableCell>{item.call_time}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Duration</TableHead>
                  <TableCell>{item.duration}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Category Status</TableHead>
                  <TableCell>{item.category_status}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Status Call</TableHead>
                  <TableCell>{item.status_call}</TableCell>
                </TableRow>

                <TableRow>
                  <TableHead>Remarks</TableHead>
                  <TableCell>{item.remarks}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Call;

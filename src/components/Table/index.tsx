import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
} from "@/components/ui/table";
import Modals from "../Modals";
import DatePickerRange from "../DatePickerRange";
import DatePicker from "../DatePicker";
import Filters from "../Filters";
import DialogPatient from "../DialogPatient";

export default function TablePatient() {
  return (
    <div className="overflow-auto">
      <div className="p-6 max-w-screen-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-medium">Patients</h1>
        <div className="flex items-center justify-between">
          <Modals />

          <DatePickerRange />

          <DatePicker />

          <Filters />

          <DialogPatient />
        </div>
        <div className="border">
          <Table>
            <TableHeader>
              <TableHead>Patient</TableHead>
              <TableHead>Case</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Unity</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Images</TableHead>
              <TableHead>Ações</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>Okina</TableCell>
                  <TableCell>Ultrassom</TableCell>
                  <TableCell>01/12/2020</TableCell>
                  <TableCell>Urgency</TableCell>
                  <TableCell>Lucas</TableCell>
                  <TableCell>Unimed</TableCell>
                  <TableCell>Waiting</TableCell>
                  <TableCell>Fotos</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

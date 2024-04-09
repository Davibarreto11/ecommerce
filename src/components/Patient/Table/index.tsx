import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
} from "@/components/ui/table";

export default function TablePatient() {
  return (
    <div className="overflow-auto">
      <div className="p-6 max-w-screen-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-medium">Patients</h1>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="ID patient" />
            <Input name="name" placeholder="Name patient" />
            <Button type="submit" variant="link">
              Filtrar resultados
            </Button>
          </form>
          <Dialog>
            <DialogTrigger asChild>
              <Button>New Patient</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>New Patient</DialogHeader>
              <DialogDescription>New Patient</DialogDescription>

              <form className="space-y-4">
                <div>
                  <Label>Patient</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Case</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Date</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Priority</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Doctor</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Unity</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>State</Label>
                  <Input />
                </div>
                <div className="">
                  <Label>Images</Label>
                  <Input />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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

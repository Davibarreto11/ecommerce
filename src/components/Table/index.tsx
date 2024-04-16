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
import { Button } from "../ui/button";
import AdvancedFilters from "../AdvancedFilters";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

export default function TablePatient() {
  const [visible, setVisible] = useState(Boolean);
  return (
    <div className="overflow-auto">
      <div className="p-6 max-w-screen-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-medium">Patients</h1>
        <div className="flex items-center justify-between">
          <Modals />

          <DatePickerRange />

          <DatePicker />

          <Filters />
          <Button onClick={() => setVisible(!visible)}>V</Button>
          <AdvancedFilters />
          <DialogPatient />
        </div>
        <div
          className={`bg-white rounded-md shadow-lg ${
            visible ? "flex items-center justify-between" : "hidden"
          }`}
        >
          <div className="space-x-1 p-1">
            <Button className="hover:bg-green-500 hover:text-white">
              Laudando
            </Button>
            <Button className="hover:bg-green-600 hover:text-white">
              Digitado I.A
            </Button>
            <Button className="hover:bg-green-700 hover:text-white">
              Enviado I.A
            </Button>
            <Button className="hover:bg-blue-500 hover:text-white">
              Originais
            </Button>
            <Button className="hover:bg-blue-600 hover:text-white">
              Duplicados
            </Button>
            <Button className="hover:bg-blue-700 hover:text-white">
              Reassinados
            </Button>
            <Button className="hover:bg-red-500 hover:text-white">
              Pré laudados
            </Button>
            <Button className="hover:bg-red-600 hover:text-white">
              A revisar
            </Button>
            <Button className="hover:bg-red-700 hover:text-white">
              Digitados
            </Button>
          </div>
          <div className="flex justify-around">
            <Button className="hover:bg-green-500 hover:text-white">+</Button>
            <Button className="hover:bg-green-600 hover:text-whitehover:text-white">
              +
            </Button>
            <Button className="hover:bg-green-700 hover:text-white">+</Button>
            <Button className="hover:bg-blue-500 hover:text-white">+</Button>
            <Button className="hover:bg-blue-600 hover:text-white">+</Button>
            <Button className="hover:bg-blue-700 hover:text-white">+</Button>
            <Button className="hover:bg-red-500 hover:text-white">+</Button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-lg">
          <Table>
            <TableHeader>
              <TableHead>
                <Checkbox disabled />
              </TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Case</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Unity</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Ações</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 20 }).map((_, i) => (
                <TableRow key={i} className="self-stretch">
                  <TableCell className="w-[20px]">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer hover:border-b-2 self-stretch">
                          Patient
                        </div>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>Alter Patient</DialogHeader>
                        <DialogDescription>Alter Patient</DialogDescription>

                        <form className="space-y-4">
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button type="button" variant="outline">
                                Cancel
                              </Button>
                            </DialogClose>
                            <Button type="submit">Save</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer hover:border-b-2">
                          Case
                        </div>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>Alter Case</DialogHeader>
                        <DialogDescription>Alter Case</DialogDescription>

                        <form className="space-y-4">
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button type="button" variant="outline">
                                Cancel
                              </Button>
                            </DialogClose>
                            <Button type="submit">Save</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell className="flex flex-col items-start">
                    <div>
                      <span className="font-bold">01/12/2020</span>
                      <p className="font-light">Recebido 17:50</p>
                    </div>
                  </TableCell>
                  <TableCell className="">Urgency</TableCell>
                  <TableCell className="">Lucas</TableCell>
                  <TableCell className="">Unimed</TableCell>
                  <TableCell className="">Waiting</TableCell>
                  <TableCell className="flex justify-start w-[100px]">
                    <div className="mr-1 cursor-pointer bg-white rounded-md shadow-sm px-4 py-3 hover:bg-gray-100">
                      +
                    </div>
                    <div className="mr-1 cursor-pointer bg-white rounded-md shadow-sm px-4 py-3 hover:bg-gray-100">
                      +
                    </div>
                    <div className="mr-1 cursor-pointer bg-white rounded-md shadow-sm px-4 py-3 hover:bg-gray-100">
                      +
                    </div>
                    <div className="mr-1 cursor-pointer bg-white rounded-md shadow-sm px-4 py-3 hover:bg-gray-100">
                      +
                    </div>
                    <div className="mr-1 cursor-pointer bg-white rounded-md shadow-sm px-4 py-3 hover:bg-gray-100">
                      +
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

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
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { addDays, format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

export default function AdvancedFilters() {
  const [birthDay, setBirthDay] = useState();
  const [date, setDate] = useState(new Date());
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>Filters</DialogHeader>
        <DialogDescription>Advanced Filters</DialogDescription>

        <form className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <Label>Patient</Label>
              <Input placeholder="Transaferência" />
            </div>
            <div style={{ width: "40%" }}>
              <Label>Priority</Label>
              <Select onValueChange={(value: string) => setPriority(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Emergency</SelectItem>
                  <SelectItem value="1">Urgency</SelectItem>
                  <SelectItem value="3">Neutro</SelectItem>
                  <SelectItem value="7">Extremo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Label>CPF</Label>
              <Input placeholder="Buscar CPF" />
            </div>
            <div style={{ width: "40%" }}>
              <Label>Status</Label>
              <Select onValueChange={(value: string) => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Waiting</SelectItem>
                  <SelectItem value="1">Lauding</SelectItem>
                  <SelectItem value="3">Concluded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Label>Covênio</Label>
              <Input placeholder="Buscar Convênio" />
            </div>
            <div style={{ width: "40%" }}>
              <Label>Status</Label>
              <Select onValueChange={(value: string) => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Waiting</SelectItem>
                  <SelectItem value="1">Lauding</SelectItem>
                  <SelectItem value="3">Concluded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Label>Solicitação</Label>
              <Input placeholder="Buscar Solicitação" />
            </div>
            <div>
              <Label>Accession number</Label>
              <Input placeholder="Buscar Accession" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Label>Solicitação</Label>
              <Input placeholder="Buscar Solicitação" />
            </div>
            <div style={{ width: "40%" }}>
              <Label>Nascimento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !birthDay && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {birthDay ? (
                      format(birthDay, "PPP")
                    ) : (
                      <span>Pick a birthDay</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select
                    onValueChange={(value) =>
                      setBirthDay(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Tomorrow</SelectItem>
                      <SelectItem value="3">In 3 days</SelectItem>
                      <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={birthDay}
                      onSelect={setBirthDay}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Label>Solicitação</Label>
              <Input placeholder="Buscar Solicitação" />
            </div>
            <div style={{ width: "40%" }}>
              <Label>Período</Label>
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="destructive">Clear</Button>
            <Button type="submit">Filter</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

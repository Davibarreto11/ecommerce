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

export default function DialogPatient() {
  return (
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
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

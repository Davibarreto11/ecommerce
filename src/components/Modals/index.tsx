import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Modals() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Modals</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>Modals</DialogHeader>
        <DialogDescription>Filter modals</DialogDescription>
        <form className="">
          <div className="flex items-start flex-col space-y-4">
            <div className="flex items-center gap-2 min-w-[100px]">
              <Checkbox />
              <Label>Todos</Label>
            </div>
            <div className="flex items-center justify-between gap-2 min-w-[100px]">
              <Checkbox />
              <Label>DX</Label>
              <Checkbox />
              <Label>US</Label>
            </div>
            <div className="flex items-center justify-between gap-2 min-w-[100px]">
              <Checkbox />
              <Label>CT</Label>
              <Checkbox />
              <Label>CR</Label>
            </div>
            <div className="flex items-center justify-between gap-2 min-w-[100px]">
              <Checkbox />
              <Label>MG</Label>
              <Checkbox />
              <Label>OT</Label>
            </div>
            <div className="flex items-center justify-between gap-2 min-w-[100px]">
              <Checkbox />
              <Label>MR</Label>
              <Checkbox />
              <Label>XA</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Filter</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

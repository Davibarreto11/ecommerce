import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Filters() {
  return (
    <form className="flex items-center gap-2">
      <Input name="unity" placeholder="Filter Unity" />
      <Input name="doctor" placeholder="Filter doctor" />
      <Button type="submit" variant="link">
        Filter Results
      </Button>
    </form>
  );
}

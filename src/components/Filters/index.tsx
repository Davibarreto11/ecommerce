// import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Filters() {
  return (
    <form className="flex items-center gap-2">
      <Input name="unity" placeholder="Filtrar Unidade" />
      <Input name="doctor" placeholder="Filtrar médico" />
      {/* <Button type="submit" variant="link">
        Resultado dos filtros
      </Button> */}
    </form>
  );
}

import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type TableFooterProps = {
  totalPages: number;
  setItensPerPage: (items: number) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number; // Adicione o currentPage como prop para rastrear a página atual
};

export function TableFooter({
  totalPages,
  setItensPerPage,
  setCurrentPage,
  currentPage, // Adiciona o currentPage como prop
}: TableFooterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <p>Linhas por página:</p>
        <Select defaultValue="10" onValueChange={(value) => setItensPerPage(Number(value))}>
          <SelectTrigger className="bg-white w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <p>
          Página {currentPage + 1} de {totalPages}
        </p>
        <Button variant={"outline"} onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
          {"<<"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)}
          disabled={currentPage === 0}
        >
          {"<"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setCurrentPage(currentPage < totalPages - 1 ? currentPage + 1 : totalPages - 1)}
          disabled={currentPage >= totalPages - 1}
        >
          {">"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setCurrentPage(totalPages - 1)}
          disabled={currentPage >= totalPages - 1}
        >
          {">>"}
        </Button>
      </div>
    </div>
  );
}

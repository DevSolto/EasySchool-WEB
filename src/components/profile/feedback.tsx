import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";

export function Feedback() {
  const { toast } = useToast({});

  const [problem, setProblem] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setProblem(value);
  };

  const handleSubmit = () => {
    toast({
      title: "Relatando problema!",
      description: problem,
    });
    setProblem("");
  };

  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="1">
        <AccordionTrigger>Relatar Problema</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="problem">Problema</Label>
            <div className="px-1">
              <Textarea
                id="problem"
                value={problem}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Button onClick={handleSubmit} variant="destructive">Enviar</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

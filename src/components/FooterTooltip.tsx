import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function FooterTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span>friends</span>
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white">
          <span>React & Vue</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

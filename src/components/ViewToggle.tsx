
import { Button } from "@/components/ui/button";
import { Box, Layout } from "lucide-react";

interface ViewToggleProps {
  is3D: boolean;
  onToggle: () => void;
}

export const ViewToggle = ({ is3D, onToggle }: ViewToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white border-violet-300 hover:border-violet-400"
    >
      {is3D ? (
        <>
          <Layout size={16} className="mr-2" />
          2D View
        </>
      ) : (
        <>
          <Box size={16} className="mr-2" />
          3D View
        </>
      )}
    </Button>
  );
};

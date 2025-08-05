import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BookCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookCallModal = ({ open, onOpenChange }: BookCallModalProps) => {
  const handleBookCall = () => {
    window.open('https://raaragency.systeme.io/book/11/session', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Service Preview</DialogTitle>
          <DialogDescription className="text-center">
            This is just a preview of our service capabilities. To access the full features and get started with our AI real estate platform, please book a call with our team.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 pt-4">
          <Button onClick={handleBookCall} className="w-full">
            <Calendar className="w-4 h-4 mr-2" />
            Book a Call Now
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full">
            Continue Preview
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;
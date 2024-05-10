'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BadgeCheck } from 'lucide-react';
import { useState } from 'react';

const ThankYouDialog = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-black text-white h-[20rem]  flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-5xl text-center">
            Thank You for Joining the Waitlist
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col items-center gap-2 mt-5">
            <div>
              <BadgeCheck
                className="text-white border-none h-10 w-10"
                fill="green"
              />
            </div>
            <div>You will be notified as soon as we Launch</div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouDialog;

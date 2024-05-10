'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BadgeCheck } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const ThankYouDialog = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
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
                className="text-white border-none h-12 w-12"
                fill="green"
              />
            </div>
            <div>
              You will be notified as soon as we <strong>Launch</strong>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouDialog;

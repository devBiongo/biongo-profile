import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, Key } from 'lucide-react';

export function SecretKeyDialog({ secret, setSecret }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Key className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>My Secret</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              value={secret}
              onChange={(e) => {
                localStorage.setItem('myKey', e.target.value);
                setSecret(e.target.value);
              }}
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>

            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}>
    <SliderPrimitive.Track className='relative w-full h-1 overflow-hidden rounded-full grow bg-slate-700'>
      <SliderPrimitive.Range
        className='absolute h-full bg-red-500 bg-primary'
        style={{ background: '#D64664' }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block w-5 h-5 transition-colors border rounded-full outline-none border-primary bg-background ring-none disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

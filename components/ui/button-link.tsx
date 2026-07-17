import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ButtonLinkProps = React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>

/**
 * An anchor styled as a button. Use for navigation links that should look like
 * buttons (the Base UI Button uses a `render` prop rather than `asChild`, so a
 * dedicated link element keeps semantics correct and accessible).
 */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

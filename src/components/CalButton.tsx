/**
 * CalButton — Opens a Cal.id booking page directly in a new tab.
 *
 * Props:
 *   calType="strategy"      → opens the strategy call event (default)
 *   calType="consultation"  → opens the free consultation event
 */

import { Button } from "@/components/ui/button";
import type { ComponentPropsWithoutRef } from "react";

export const CAL_URLS = {
  strategy:     "https://cal.id/kunal-matale/interview",
  consultation: "https://cal.id/kunal-matale/consultation",
} as const;

type CalType = keyof typeof CAL_URLS;
type ButtonVariant = "citrus" | "emerald" | "outline" | "default";
type ButtonSize = "sm" | "default" | "lg" | "xl";

interface CalButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "onClick"> {
  calType?: CalType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export function CalButton({
  calType = "strategy",
  variant = "citrus",
  size = "lg",
  children,
  className,
  ...props
}: CalButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open(CAL_URLS[calType], "_blank", "noopener,noreferrer")}
      {...props}
    >
      {children}
    </Button>
  );
}

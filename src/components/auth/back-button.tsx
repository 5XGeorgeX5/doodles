"use client";

import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

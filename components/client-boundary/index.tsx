"use client";
import { ReactNode, useEffect, useState } from "react";

export function ClientBoundary({ children }: { children: ReactNode }) {
  const [initialRender, setInitialRender] = useState(false);

  useEffect(() => {
    setInitialRender(true);
  }, []);

  if (!initialRender) return null;

  return <>{children}</>;
}

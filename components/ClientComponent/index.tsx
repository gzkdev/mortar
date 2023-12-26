"use client";
import { ReactNode, useEffect, useState } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  const [initialRender, setInitialRender] = useState(false);

  useEffect(() => {
    setInitialRender(true);
  }, []);

  if (!initialRender) return null;

  return <>{children}</>;
}

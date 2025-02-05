import { useEffect, useState } from "react";

export const useMounted = () => {
  const [mounted, SetMounted] = useState(() => false);

  useEffect(() => {
    SetMounted(true);
  }, []);

  return mounted;
};

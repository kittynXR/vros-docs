import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Root({ children }: Props): React.JSX.Element {
  useEffect(() => {
    document.documentElement.dataset.theme = "indigo";
    document.documentElement.dataset.glow = "1";
    document.body.classList.add("vros-ui");
    document.body.dataset.theme = "indigo";
    document.body.dataset.glow = "1";

    return () => {
      document.body.classList.remove("vros-ui");
      delete document.documentElement.dataset.theme;
      delete document.documentElement.dataset.glow;
      delete document.body.dataset.theme;
      delete document.body.dataset.glow;
    };
  }, []);

  return <>{children}</>;
}

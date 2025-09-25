import { createContext, useContext, useState, type ReactNode } from "react";

type NcmContextType = {
  ncm: string;
  setNcm: (value: string) => void;
};

export const NcmContext = createContext<NcmContextType | undefined>(undefined);

export function NcmProvider({ children }: { children: ReactNode }) {
  const [ncm, setNcm] = useState<string>("");

  return (
    <NcmContext.Provider value={{ ncm, setNcm }}>
      {children}
    </NcmContext.Provider>
  );
}

export function useNcm() {
  const context = useContext(NcmContext);
  if (!context) {
    throw new Error("useNcm deve ser usado dentro de um NcmProvider");
  }
  return context;
}
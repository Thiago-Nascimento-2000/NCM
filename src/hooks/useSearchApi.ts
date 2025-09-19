// hooks/useSearchApi.ts
import { useEffect, useState } from "react";

type ApiResponse = {
  message?: string;
  names?: string[];
};

export function useSearchApi(search?: string, URL?: string) {
  const [searchData, setSearchData] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!URL) return;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search ? { nome: search } : {}), // sempre manda JSON
    })
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        console.log("API DATA:", data);

        if (Array.isArray(data.names)) {
          setSearchData(data.names);
        } else {
          setSearchData([]);
        }

        if (data.message) {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchData([]);
        setMessage("Erro ao buscar clientes");
      });
  }, [search, URL]);

  return { searchData, message };
}

import { useEffect, useState } from "react";

type ApiResponse = {
  message?: string;
  names?: string[];
};

export function useSearchApi(search?: string, URL?: string) {
  const [searchData, setSearchData] = useState<string[]>([]);

  useEffect(() => {
    if (!URL) return;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search ? { nome: search } : {}),
    })
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        console.log("CLIENT:", data);

        if (Array.isArray(data.names)) {
          setSearchData(data.names);
        } else {
          setSearchData([]);
        }

      })
      .catch((error) => {
        console.error(error);
        setSearchData([]);
      });
  }, [search, URL]);

  return { searchData };
}

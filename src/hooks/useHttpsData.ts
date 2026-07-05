import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpsData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url === "") {
      console.log("url indefinida");
      return;
    }
    setLoading(true);
    console.log("efecto ejecutado con url:", url);
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => setData(data.meals))
      .catch((error) => console.log("error en el fetch:", error))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading };
}

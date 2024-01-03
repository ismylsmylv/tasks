"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../app/lib/store";
import { incremented } from "../app/lib/features/todosSlice";

export default function StoreProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(incremented(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

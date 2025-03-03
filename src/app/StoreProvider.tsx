"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { mainStore, AppStore } from "../lib/store/store";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = mainStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}

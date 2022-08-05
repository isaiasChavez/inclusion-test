import React from "react";
import { SWRConfiguration } from "swr";

export interface FactoryProps {
    endpoint: string;
    config?: SWRConfiguration | undefined;
    title: string;
    cardStyles?:React.CSSProperties,
    children?:React.ReactNode
  }
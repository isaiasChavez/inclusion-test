import React from "react";
import { SWRConfiguration } from "swr";

/**
 * @typedef FactoryProps
 * 
 * @author isaias chávez 
 * @param {React.CSSProperties} cardStyles property to overriden to manage the card's style
 * @param {string} title property for title of card
 * @param {SWRConfiguration} config request configuration, for example, time for revalidation, etc.
 * @param {string} endpoint property for endpoint which is going to use to get data
 */
export interface FactoryProps {
    endpoint: string;
    config?: SWRConfiguration | undefined;
    title: string;
    cardStyles?:React.CSSProperties,
    children?:React.ReactNode
  }
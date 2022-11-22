import { Property, PropertyTypes } from "../../types";
import { AbstractParser } from "../abstract-parser";

export abstract class AbstractPropertyParser<TData, TType extends PropertyTypes, TResult> extends AbstractParser<Property<TData, TType>, TResult | undefined | null> {}
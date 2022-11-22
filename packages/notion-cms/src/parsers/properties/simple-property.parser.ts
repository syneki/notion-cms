import { Property, PropertyTypes } from "../../types";
import { AbstractPropertyParser } from "./abstract-property.parser";

export class SimplePropertyParser<TData, TType extends PropertyTypes> extends AbstractPropertyParser<TData, TType, TData> {

    parse(data: Property<TData, TType>): TData | null | undefined {
        return data[data.type]
    }

}
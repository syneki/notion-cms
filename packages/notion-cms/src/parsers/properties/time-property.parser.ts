import { Property, PropertyTimeTypes } from "../../types";
import { AbstractPropertyParser } from "./abstract-property.parser";

export class TimePropertyParser<TType extends PropertyTimeTypes> extends AbstractPropertyParser<string, TType, string> {
    parse(data: Property<string, TType>): string | null | undefined {
        const value = data[data.type]
        return value
    }
}
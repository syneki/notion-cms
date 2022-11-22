import { DateResponse, NotionDate, Property } from "../../types";
import { AbstractPropertyParser } from "./abstract-property.parser";

export class DatePropertyParser extends AbstractPropertyParser<DateResponse, 'date', NotionDate> {

    parse(data: Property<DateResponse, 'date'>): NotionDate | null | undefined {
        return data.date && {
            start: data.date.start,
            end: data.date.end
        }
    }
}
import { Property, View } from "@nativescript/core";

export class CarouselCommon extends View {

}

export const transformationProperty = new Property<CarouselCommon, string>({
    name: 'transformer',
});
transformationProperty.register(CarouselCommon);

export const infiniteProperty = new Property<CarouselCommon, boolean>({
    name: 'infinte',
    defaultValue: false
});
infiniteProperty.register(CarouselCommon);

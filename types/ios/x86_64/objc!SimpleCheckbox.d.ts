
declare const enum BorderStyle {

	Square = 0,

	Circle = 1
}

declare class Checkbox extends UIControl {

	static alloc(): Checkbox; // inherited from NSObject

	static appearance(): Checkbox; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Checkbox; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Checkbox; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Checkbox; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Checkbox; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Checkbox; // inherited from UIAppearance

	static new(): Checkbox; // inherited from NSObject

	borderCornerRadius: number;

	borderLineWidth: number;

	borderStyle: BorderStyle;

	checkboxFillColor: UIColor;

	checkedBorderColor: UIColor;

	checkmarkColor: UIColor;

	checkmarkSize: number;

	checkmarkStyle: CheckmarkStyle;

	emoji: string;

	increasedTouchRadius: number;

	isChecked: boolean;

	uncheckedBorderColor: UIColor;

	useHapticFeedback: boolean;
}

declare const enum CheckmarkStyle {

	Square = 0,

	Circle = 1,

	Cross = 2,

	Tick = 3
}

declare var SimpleCheckboxVersionNumber: number;

declare var SimpleCheckboxVersionString: interop.Reference<number>;

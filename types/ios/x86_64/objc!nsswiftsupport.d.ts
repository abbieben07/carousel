
declare class NSCheckbox extends Checkbox {

	static alloc(): NSCheckbox; // inherited from NSObject

	static appearance(): NSCheckbox; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NSCheckbox; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCheckbox; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSCheckbox; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCheckbox; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSCheckbox; // inherited from UIAppearance

	static new(): NSCheckbox; // inherited from NSObject

	delegate: NSCheckboxDelegate;

	addDelegate(deleagte: NSCheckboxDelegate): void;

	checkChangeWithSender(sender: NSCheckbox): void;
}

interface NSCheckboxDelegate {

	onCheckChange(checkbox: any): void;
}
declare var NSCheckboxDelegate: {

	prototype: NSCheckboxDelegate;
};

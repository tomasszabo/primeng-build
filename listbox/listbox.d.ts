import { ElementRef, EventEmitter, AfterContentInit, QueryList, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ControlValueAccessor } from '@angular/forms';
export declare const LISTBOX_VALUE_ACCESSOR: any;
export declare class Listbox implements AfterContentInit, ControlValueAccessor {
    el: ElementRef;
    cd: ChangeDetectorRef;
    multiple: boolean;
    style: any;
    styleClass: string;
    listStyle: any;
    listStyleClass: string;
    readonly: boolean;
    disabled: boolean;
    checkbox: boolean;
    filter: boolean;
    filterMode: string;
    filterLocale: string;
    metaKeySelection: boolean;
    dataKey: string;
    showToggleAll: boolean;
    optionLabel: string;
    ariaFilterLabel: string;
    filterPlaceHolder: string;
    onChange: EventEmitter<any>;
    onClick: EventEmitter<any>;
    onDblClick: EventEmitter<any>;
    headerCheckboxViewChild: ElementRef;
    headerFacet: any;
    footerFacet: any;
    templates: QueryList<any>;
    itemTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    _filterValue: string;
    filtered: boolean;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    optionTouched: boolean;
    focus: boolean;
    _options: any[];
    headerCheckboxFocus: boolean;
    disabledSelectedOptions: SelectItem[];
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    get options(): any[];
    set options(val: any[]);
    get filterValue(): string;
    set filterValue(val: string);
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onOptionClick(event: any, option: any): void;
    onOptionTouchEnd(event: any, option: any): void;
    onOptionDoubleClick(event: Event, option: SelectItem): any;
    onOptionClickSingle(event: any, option: any): void;
    onOptionClickMultiple(event: any, option: any): void;
    onOptionClickCheckbox(event: any, option: any): void;
    removeOption(option: any): void;
    isSelected(option: SelectItem): boolean;
    get allChecked(): boolean;
    getEnabledOptionCount(): number;
    allFilteredSelected(): boolean;
    onFilter(event: any): void;
    toggleAll(event: any): void;
    isItemVisible(option: SelectItem): boolean;
    onOptionKeyDown(event: KeyboardEvent, option: any): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    getFilteredOptions(): any[];
    onHeaderCheckboxFocus(): void;
    onHeaderCheckboxBlur(): void;
    setDisabledSelectedOptions(): void;
}
export declare class ListboxModule {
}

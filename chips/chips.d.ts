import { ElementRef, EventEmitter, AfterContentInit, QueryList, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CHIPS_VALUE_ACCESSOR: any;
export declare class Chips implements AfterContentInit, ControlValueAccessor {
    el: ElementRef;
    cd: ChangeDetectorRef;
    style: any;
    styleClass: string;
    disabled: boolean;
    field: string;
    placeholder: string;
    max: number;
    ariaLabelledBy: string;
    tabindex: number;
    inputId: string;
    allowDuplicate: boolean;
    inputStyle: any;
    inputStyleClass: any;
    addOnTab: boolean;
    addOnBlur: boolean;
    separator: string;
    onAdd: EventEmitter<any>;
    onRemove: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onChipClick: EventEmitter<any>;
    inputViewChild: ElementRef;
    templates: QueryList<any>;
    itemTemplate: TemplateRef<any>;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    valueChanged: boolean;
    focus: boolean;
    filled: boolean;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onClick(): void;
    onInput(): void;
    onPaste(event: any): void;
    updateFilledState(): void;
    onItemClick(event: Event, item: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    resolveFieldData(data: any, field: string): any;
    onInputFocus(event: FocusEvent): void;
    onInputBlur(event: FocusEvent): void;
    removeItem(event: Event, index: number): void;
    addItem(event: Event, item: string, preventDefault: boolean): void;
    onKeydown(event: KeyboardEvent): void;
    updateMaxedOut(): void;
}
export declare class ChipsModule {
}

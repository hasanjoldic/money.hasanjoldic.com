/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReceiptPatch } from './ReceiptPatch';

export type Receipt = (ReceiptPatch & {
    readonly scanUrl?: string;
} & {
    readonly scanUrl: string;
});


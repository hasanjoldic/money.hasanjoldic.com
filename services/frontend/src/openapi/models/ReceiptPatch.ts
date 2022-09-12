/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReceiptPost } from './ReceiptPost';

export type ReceiptPatch = (ReceiptPost & {
    id?: string;
} & {
    id: string;
});


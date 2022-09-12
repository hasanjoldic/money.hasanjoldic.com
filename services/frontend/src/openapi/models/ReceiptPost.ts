/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReceiptPost = {
    total: number;
    /**
     * Date when we received the receipt
     */
    receivedAt?: string;
    scanFile: Blob;
};


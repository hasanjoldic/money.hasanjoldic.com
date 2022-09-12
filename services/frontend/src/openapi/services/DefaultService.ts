/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Receipt } from '../models/Receipt';
import type { ReceiptPatch } from '../models/ReceiptPatch';
import type { ReceiptPost } from '../models/ReceiptPost';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param id
     * @returns Receipt Success
     * @throws ApiError
     */
    public static getReceiptById(
        id: string,
    ): CancelablePromise<Receipt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/receipts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param formData
     * @returns Receipt Success
     * @throws ApiError
     */
    public static patchReceipts(
        id: string,
        formData?: ReceiptPatch,
    ): CancelablePromise<Receipt> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/receipts/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id
     * @returns Receipt Success
     * @throws ApiError
     */
    public static deleteReceipts(
        id: string,
    ): CancelablePromise<Receipt> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/receipts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getReceipts(): CancelablePromise<{
        data?: Array<Receipt>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/receipts',
        });
    }

    /**
     * @param formData
     * @returns Receipt Success
     * @throws ApiError
     */
    public static postReceipts(
        formData?: ReceiptPost,
    ): CancelablePromise<Receipt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/receipts',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}

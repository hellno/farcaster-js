/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ReactionType } from './reaction-type.js';

/**
 * 
 * @export
 * @interface ReactionReqBody
 */
export interface ReactionReqBody {
    /**
     * UUID of the signer
     * @type {string}
     * @memberof ReactionReqBody
     */
    'signer_uuid': string;
    /**
     * 
     * @type {ReactionType}
     * @memberof ReactionReqBody
     */
    'reaction_type': ReactionType;
    /**
     * 
     * @type {string}
     * @memberof ReactionReqBody
     */
    'target': string;
}




/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { SignerEventType } from "./signer-event-type";

/**
 *
 * @export
 * @interface SignerEventBody
 */
export interface SignerEventBody {
  /**
   *
   * @type {string}
   * @memberof SignerEventBody
   */
  key: string;
  /**
   *
   * @type {number}
   * @memberof SignerEventBody
   */
  keyType: number;
  /**
   *
   * @type {SignerEventType}
   * @memberof SignerEventBody
   */
  eventType: SignerEventType;
  /**
   *
   * @type {string}
   * @memberof SignerEventBody
   */
  metadata: string;
  /**
   *
   * @type {number}
   * @memberof SignerEventBody
   */
  metadataType: number;
}

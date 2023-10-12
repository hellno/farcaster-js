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
import { CastId } from "./cast-id";
// May contain unused imports in some cases
// @ts-ignore
import { ReactionType } from "./reaction-type";

/**
 *
 * @export
 * @interface ReactionBody
 */
export interface ReactionBody {
  /**
   *
   * @type {ReactionType}
   * @memberof ReactionBody
   */
  type: ReactionType;
  /**
   *
   * @type {CastId}
   * @memberof ReactionBody
   */
  targetCastId?: CastId;
  /**
   *
   * @type {string}
   * @memberof ReactionBody
   */
  targetUrl?: string;
}

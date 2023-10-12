/* tslint:disable */
/* eslint-disable */
/**
 * v2 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CastEmbed } from "./cast-embed";
// May contain unused imports in some cases
// @ts-ignore
import { CastNotificationType } from "./cast-notification-type";
// May contain unused imports in some cases
// @ts-ignore
import { CastParentAuthor } from "./cast-parent-author";
// May contain unused imports in some cases
// @ts-ignore
import { User } from "./user";

/**
 *
 * @export
 * @interface Cast
 */
export interface Cast {
  /**
   *
   * @type {string}
   * @memberof Cast
   */
  hash: string;
  /**
   *
   * @type {string}
   * @memberof Cast
   */
  parent_hash: string | null;
  /**
   *
   * @type {string}
   * @memberof Cast
   */
  parent_url: string | null;
  /**
   *
   * @type {CastParentAuthor}
   * @memberof Cast
   */
  parent_author: CastParentAuthor;
  /**
   *
   * @type {User}
   * @memberof Cast
   */
  author: User;
  /**
   *
   * @type {string}
   * @memberof Cast
   */
  text: string;
  /**
   *
   * @type {string}
   * @memberof Cast
   */
  timestamp: string;
  /**
   *
   * @type {Array<CastEmbed>}
   * @memberof Cast
   */
  embeds: Array<CastEmbed>;
  /**
   *
   * @type {CastNotificationType}
   * @memberof Cast
   */
  type?: CastNotificationType;
}

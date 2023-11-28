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
import { NotificationReactionsCast } from './notification-reactions-cast.js';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user.js';

/**
 * 
 * @export
 * @interface NotificationReactions
 */
export interface NotificationReactions {
    /**
     * 
     * @type {string}
     * @memberof NotificationReactions
     */
    'object': NotificationReactionsObjectEnum;
    /**
     * 
     * @type {NotificationReactionsCast}
     * @memberof NotificationReactions
     */
    'cast': NotificationReactionsCast;
    /**
     * 
     * @type {User}
     * @memberof NotificationReactions
     */
    'user': User;
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationReactionsObjectEnum {
    Likes = 'likes',
    Recasts = 'recasts'
}



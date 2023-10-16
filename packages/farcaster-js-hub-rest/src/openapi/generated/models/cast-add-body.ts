/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. Some client libraries:   - [TypeScript](https://www.npmjs.com/package/@standard-crypto/farcaster-js-hub-rest) 
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
import { CastId } from './cast-id';
// May contain unused imports in some cases
// @ts-ignore
import { Embed } from './embed';

/**
 * Adds a new Cast
 * @export
 * @interface CastAddBody
 */
export interface CastAddBody {
    /**
     * 
     * @type {Array<string>}
     * @memberof CastAddBody
     */
    'embedsDeprecated': Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof CastAddBody
     */
    'mentions': Array<number>;
    /**
     * 
     * @type {CastId}
     * @memberof CastAddBody
     */
    'parentCastId'?: CastId;
    /**
     * 
     * @type {string}
     * @memberof CastAddBody
     */
    'parentUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof CastAddBody
     */
    'text': string;
    /**
     * 
     * @type {Array<number>}
     * @memberof CastAddBody
     */
    'mentionsPositions': Array<number>;
    /**
     * 
     * @type {Array<Embed>}
     * @memberof CastAddBody
     */
    'embeds': Array<Embed>;
}


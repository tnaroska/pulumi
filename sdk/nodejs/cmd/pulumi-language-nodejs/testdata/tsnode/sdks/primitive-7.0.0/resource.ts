// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Resource extends pulumi.CustomResource {
    /**
     * Get an existing Resource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Resource {
        return new Resource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'primitive:index:Resource';

    /**
     * Returns true if the given object is an instance of Resource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Resource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Resource.__pulumiType;
    }

    public readonly boolean!: pulumi.Output<boolean>;
    public readonly booleanMap!: pulumi.Output<{[key: string]: boolean}>;
    public readonly float!: pulumi.Output<number>;
    public readonly integer!: pulumi.Output<number>;
    public readonly numberArray!: pulumi.Output<number[]>;
    public readonly string!: pulumi.Output<string>;

    /**
     * Create a Resource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.boolean === undefined) && !opts.urn) {
                throw new Error("Missing required property 'boolean'");
            }
            if ((!args || args.booleanMap === undefined) && !opts.urn) {
                throw new Error("Missing required property 'booleanMap'");
            }
            if ((!args || args.float === undefined) && !opts.urn) {
                throw new Error("Missing required property 'float'");
            }
            if ((!args || args.integer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integer'");
            }
            if ((!args || args.numberArray === undefined) && !opts.urn) {
                throw new Error("Missing required property 'numberArray'");
            }
            if ((!args || args.string === undefined) && !opts.urn) {
                throw new Error("Missing required property 'string'");
            }
            resourceInputs["boolean"] = args ? args.boolean : undefined;
            resourceInputs["booleanMap"] = args ? args.booleanMap : undefined;
            resourceInputs["float"] = args ? args.float : undefined;
            resourceInputs["integer"] = args ? args.integer : undefined;
            resourceInputs["numberArray"] = args ? args.numberArray : undefined;
            resourceInputs["string"] = args ? args.string : undefined;
        } else {
            resourceInputs["boolean"] = undefined /*out*/;
            resourceInputs["booleanMap"] = undefined /*out*/;
            resourceInputs["float"] = undefined /*out*/;
            resourceInputs["integer"] = undefined /*out*/;
            resourceInputs["numberArray"] = undefined /*out*/;
            resourceInputs["string"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Resource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Resource resource.
 */
export interface ResourceArgs {
    boolean: pulumi.Input<boolean>;
    booleanMap: pulumi.Input<{[key: string]: pulumi.Input<boolean>}>;
    float: pulumi.Input<number>;
    integer: pulumi.Input<number>;
    numberArray: pulumi.Input<pulumi.Input<number>[]>;
    string: pulumi.Input<string>;
}
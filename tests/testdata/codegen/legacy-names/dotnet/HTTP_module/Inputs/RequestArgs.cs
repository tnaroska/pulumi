// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Legacy_names.HTTP_module.Inputs
{

    public sealed class RequestArgs : global::Pulumi.ResourceArgs
    {
        [Input("URL")]
        public Input<string>? URL { get; set; }

        [Input("content_body")]
        public Input<string>? Content_body { get; set; }

        public RequestArgs()
        {
        }
        public static new RequestArgs Empty => new RequestArgs();
    }
}
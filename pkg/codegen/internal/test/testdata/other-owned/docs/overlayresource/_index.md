
---
title: "OverlayResource"
title_tag: "example.OverlayResource"
meta_desc: "Documentation for the example.OverlayResource resource with examples, input properties, output properties, lookup functions, and supporting types."
layout: api
no_edit_this_page: true
---



<!-- WARNING: this file was generated by test. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->




## Create a OverlayResource Resource {#create}
{{< chooser language "typescript,python,go,csharp" / >}}


{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx">OverlayResource</span><span class="p">(</span><span class="nx">name</span><span class="p">:</span> <span class="nx">string</span><span class="p">,</span> <span class="nx">args</span><span class="p">?:</span> <span class="nx"><a href="#inputs">OverlayResourceArgs</a></span><span class="p">,</span> <span class="nx">opts</span><span class="p">?:</span> <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class=nd>@overload</span>
<span class="k">def </span><span class="nx">OverlayResource</span><span class="p">(</span><span class="nx">resource_name</span><span class="p">:</span> <span class="nx">str</span><span class="p">,</span>
                    <span class="nx">opts</span><span class="p">:</span> <span class="nx"><a href="/docs/reference/pkg/python/pulumi/#pulumi.ResourceOptions">Optional[ResourceOptions]</a></span> = None<span class="p">,</span>
                    <span class="nx">bar</span><span class="p">:</span> <span class="nx">Optional[EnumOverlay]</span> = None<span class="p">,</span>
                    <span class="nx">foo</span><span class="p">:</span> <span class="nx">Optional[ConfigMapOverlayArgs]</span> = None<span class="p">)</span>
<span class=nd>@overload</span>
<span class="k">def </span><span class="nx">OverlayResource</span><span class="p">(</span><span class="nx">resource_name</span><span class="p">:</span> <span class="nx">str</span><span class="p">,</span>
                    <span class="nx">args</span><span class="p">:</span> <span class="nx"><a href="#inputs">Optional[OverlayResourceArgs]</a></span> = None<span class="p">,</span>
                    <span class="nx">opts</span><span class="p">:</span> <span class="nx"><a href="/docs/reference/pkg/python/pulumi/#pulumi.ResourceOptions">Optional[ResourceOptions]</a></span> = None<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span><span class="nx">NewOverlayResource</span><span class="p">(</span><span class="nx">ctx</span><span class="p"> *</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">,</span> <span class="nx">name</span><span class="p"> </span><span class="nx">string</span><span class="p">,</span> <span class="nx">args</span><span class="p"> *</span><span class="nx"><a href="#inputs">OverlayResourceArgs</a></span><span class="p">,</span> <span class="nx">opts</span><span class="p"> ...</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx">OverlayResource</span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx">OverlayResource</span><span class="p">(</span><span class="nx">string</span><span class="p"> </span><span class="nx">name<span class="p">,</span> <span class="nx"><a href="#inputs">OverlayResourceArgs</a></span><span class="p">? </span><span class="nx">args = null<span class="p">,</span> <span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span><span class="p">? </span><span class="nx">opts = null<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language nodejs %}}

<dl class="resources-properties"><dt
        class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>The unique name of the resource.</dd><dt
        class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inputs">OverlayResourceArgs</a></span>
    </dt>
    <dd>The arguments to resource properties.</dd><dt
        class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span>
    </dt>
    <dd>Bag of options to control resource&#39;s behavior.</dd></dl>

{{% /choosable %}}

{{% choosable language python %}}

<dl class="resources-properties"><dt
        class="property-required" title="Required">
        <span>resource_name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>The unique name of the resource.</dd><dt
        class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inputs">OverlayResourceArgs</a></span>
    </dt>
    <dd>The arguments to resource properties.</dd><dt
        class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="/docs/reference/pkg/python/pulumi/#pulumi.ResourceOptions">ResourceOptions</a></span>
    </dt>
    <dd>Bag of options to control resource&#39;s behavior.</dd></dl>

{{% /choosable %}}

{{% choosable language go %}}

<dl class="resources-properties"><dt
        class="property-optional" title="Optional">
        <span>ctx</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span>
    </dt>
    <dd>Context object for the current deployment.</dd><dt
        class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>The unique name of the resource.</dd><dt
        class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inputs">OverlayResourceArgs</a></span>
    </dt>
    <dd>The arguments to resource properties.</dd><dt
        class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span>
    </dt>
    <dd>Bag of options to control resource&#39;s behavior.</dd></dl>

{{% /choosable %}}

{{% choosable language csharp %}}

<dl class="resources-properties"><dt
        class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>The unique name of the resource.</dd><dt
        class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inputs">OverlayResourceArgs</a></span>
    </dt>
    <dd>The arguments to resource properties.</dd><dt
        class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>
    </dt>
    <dd>Bag of options to control resource&#39;s behavior.</dd></dl>

{{% /choosable %}}

## OverlayResource Resource Properties {#properties}

To learn more about resource properties and how to use them, see [Inputs and Outputs]({{< relref "/docs/intro/concepts/inputs-outputs" >}}) in the Architecture and Concepts docs.

### Inputs

The OverlayResource resource accepts the following [input]({{< relref "/docs/intro/concepts/inputs-outputs" >}}) properties:



{{% choosable language csharp %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="bar_csharp">
<a href="#bar_csharp" style="color: inherit; text-decoration: inherit;">Bar</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#enumoverlay">Other.<wbr>Example.<wbr>Enum<wbr>Overlay</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd><dt class="property-optional"
            title="Optional">
        <span id="foo_csharp">
<a href="#foo_csharp" style="color: inherit; text-decoration: inherit;">Foo</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#configmapoverlay">Other.<wbr>Example.<wbr>Inputs.<wbr>Config<wbr>Map<wbr>Overlay<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language go %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="bar_go">
<a href="#bar_go" style="color: inherit; text-decoration: inherit;">Bar</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#enumoverlay">Enum<wbr>Overlay</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd><dt class="property-optional"
            title="Optional">
        <span id="foo_go">
<a href="#foo_go" style="color: inherit; text-decoration: inherit;">Foo</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#configmapoverlay">Config<wbr>Map<wbr>Overlay<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language nodejs %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="bar_nodejs">
<a href="#bar_nodejs" style="color: inherit; text-decoration: inherit;">bar</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#enumoverlay">Enum<wbr>Overlay</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd><dt class="property-optional"
            title="Optional">
        <span id="foo_nodejs">
<a href="#foo_nodejs" style="color: inherit; text-decoration: inherit;">foo</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#configmapoverlay">Config<wbr>Map<wbr>Overlay<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="bar_python">
<a href="#bar_python" style="color: inherit; text-decoration: inherit;">bar</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#enumoverlay">Enum<wbr>Overlay</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd><dt class="property-optional"
            title="Optional">
        <span id="foo_python">
<a href="#foo_python" style="color: inherit; text-decoration: inherit;">foo</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#configmapoverlay">Config<wbr>Map<wbr>Overlay<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}


### Outputs

All [input](#inputs) properties are implicitly available as output properties. Additionally, the OverlayResource resource produces the following output properties:



{{% choosable language csharp %}}
<dl class="resources-properties"><dt class="property-"
            title="">
        <span id="id_csharp">
<a href="#id_csharp" style="color: inherit; text-decoration: inherit;">Id</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language go %}}
<dl class="resources-properties"><dt class="property-"
            title="">
        <span id="id_go">
<a href="#id_go" style="color: inherit; text-decoration: inherit;">Id</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language nodejs %}}
<dl class="resources-properties"><dt class="property-"
            title="">
        <span id="id_nodejs">
<a href="#id_nodejs" style="color: inherit; text-decoration: inherit;">id</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties"><dt class="property-"
            title="">
        <span id="id_python">
<a href="#id_python" style="color: inherit; text-decoration: inherit;">id</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.{{% /md %}}</dd></dl>
{{% /choosable %}}







## Supporting Types



<h4 id="configmapoverlay">Config<wbr>Map<wbr>Overlay</h4>

{{% choosable language csharp %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="config_csharp">
<a href="#config_csharp" style="color: inherit; text-decoration: inherit;">Config</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language go %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="config_go">
<a href="#config_go" style="color: inherit; text-decoration: inherit;">Config</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language nodejs %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="config_nodejs">
<a href="#config_nodejs" style="color: inherit; text-decoration: inherit;">config</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="config_python">
<a href="#config_python" style="color: inherit; text-decoration: inherit;">config</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

<h4 id="enumoverlay">Enum<wbr>Overlay</h4>

{{% choosable language csharp %}}
<dl class="tabular"><dt>Some<wbr>Enum<wbr>Value</dt>
    <dd>SOME_ENUM_VALUE</dd></dl>
{{% /choosable %}}

{{% choosable language go %}}
<dl class="tabular"><dt>Enum<wbr>Overlay<wbr>Some<wbr>Enum<wbr>Value</dt>
    <dd>SOME_ENUM_VALUE</dd></dl>
{{% /choosable %}}

{{% choosable language nodejs %}}
<dl class="tabular"><dt>Some<wbr>Enum<wbr>Value</dt>
    <dd>SOME_ENUM_VALUE</dd></dl>
{{% /choosable %}}

{{% choosable language python %}}
<dl class="tabular"><dt>SOME_ENUM_VALUE</dt>
    <dd>SOME_ENUM_VALUE</dd></dl>
{{% /choosable %}}


<h2 id="package-details">Package Details</h2>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href=""></a></dd>
	<dt>License</dt>
	<dd></dd>
</dl>

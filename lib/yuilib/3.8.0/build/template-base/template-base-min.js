/*
YUI 3.8.0 (build 5744)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("template-base",function(e,t){function n(t){this.engine=t||e.Template.Micro,this.engine||e.error("No template engine loaded.")}n.prototype={compile:function(e,t){return this.engine.compile(e,t)},precompile:function(e,t){return this.engine.precompile(e,t)},render:function(e,t,n){return this.engine.render?this.engine.render(e,t,n):this.engine.compile(e,n)(t,n)},revive:function(e,t){return this.engine.revive?this.engine.revive(e,t):e}},e.Template=e.Template?e.mix(n,e.Template):n},"3.8.0",{requires:["yui-base"]});

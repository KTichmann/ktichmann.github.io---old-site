(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(162);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),u=a(33),l=a.n(u);a.d(t,"a",function(){return l.a});a(159);var i=r.a.createContext({}),s=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},161:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),u=a(56),l=a(2),i=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},162:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),c=a(4),u=a.n(c),l=a(150),i=a(169),s=a.n(i),m=function(){return o.a.createElement("header",null,o.a.createElement(l.a,{to:"/"},o.a.createElement("div",{className:s.a.logo},"{ ...Kerwin }")),o.a.createElement("nav",null,o.a.createElement(l.a,{to:"/"},"Home"),o.a.createElement(l.a,{to:"/about"},"About"),o.a.createElement(l.a,{to:"/projects"},"Projects"),o.a.createElement(l.a,{className:s.a.rmOnSmallest,to:"/contact"},"Contact"),o.a.createElement("a",{className:s.a.rmOnMobile,href:"https://github.com/ktichmann",target:"_blank"},"Github"),o.a.createElement("a",{className:s.a.rmOnMobile,href:"https://codepen.io/ktichmann",target:"_blank"},"CodePen")))},d=a(7),h=a.n(d),p=(a(170),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={quote:"Loading random quote..."},a}h()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;fetch("http://quotes.stormconsultancy.co.uk/random.json").then(function(e){return e.json()}).then(function(t){var a=t.quote+" -"+t.author;e.setState(function(){return{quote:a}})})},a.render=function(){return o.a.createElement("footer",null,o.a.createElement("div",null,this.state.quote),o.a.createElement("nav",null,o.a.createElement(l.a,{to:"/about"},"About"),o.a.createElement(l.a,{to:"/projects"},"Projects"),o.a.createElement(l.a,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://github.com/ktichmann",target:"_blank"},"Github"),o.a.createElement("a",{href:"https://codepen.io/ktichmann",target:"_blank"},"CodePen")))},t}(o.a.Component)),f=(a(171),function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement(p,null)))},data:n})});f.propTypes={children:u.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-5a57c65504d8c1e69451.js.map
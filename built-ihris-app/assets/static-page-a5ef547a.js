import{_ as n,l as a,m as s,p as r,H as o,aY as c,N as i,M as h,ag as l,q as d,A as u}from"./index-ba1249ff.js";import{V as p}from"./VContainer-82515277.js";const f={name:"static-page",props:["id","blank-on-err"],data:function(){return{rawHTML:null,title:"Loading..."}},created:function(){this.blankOnErr||(this.rawHTML="Loading..."),fetch("/fhir/DocumentReference/"+(this.id||this.$route.params.id)+"/$html").then(e=>{e.ok?e.json().then(t=>{this.rawHTML=t.html,this.title=t.title}).catch(t=>{console.log(t),this.blankOnErr?this.rawHTML=null:(this.title="Error",this.rawHTML="<p>Failed to access requested resource.</p>")}):this.blankOnErr?this.rawHTML=null:(this.title="Error",this.rawHTML="<p>Failed to access requested resource.</p>")}).catch(e=>{console.log(e),this.blankOnErr?this.rawHTML=null:(this.title="Error",this.rawHTML="<p>Failed to access requested resource.</p>")})}},m=["innerHTML"];function L(e,t,T,H,M,w){return a(),s(p,null,{default:r(()=>[e.rawHTML?(a(),s(o,{key:0},{default:r(()=>[e.title?(a(),s(c,{key:0,class:"primary white--text",dark:"","primary-title":""},{default:r(()=>[i("h2",null,h(e.title),1)]),_:1})):l("",!0),d(u,{class:"pa-5"},{default:r(()=>[i("div",{innerHTML:e.rawHTML},null,8,m)]),_:1})]),_:1})):l("",!0)]),_:1})}const g=n(f,[["render",L]]);export{g as default};
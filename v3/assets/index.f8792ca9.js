import{c as r,b as g,e as h,u as j}from"./use-translate.c431c781.js";import{t as C,w as i}from"./with-install.6654422d.js";import{z as c,e as u,B as l}from"./vue-libs.cab43f37.js";import{u as P}from"./use-expose.cd1f8e82.js";import{r as S,u as y}from"./use-route.1ad21ca2.js";import{B as I}from"./index.f77b2820.js";const[d,_]=r("action-bar"),p=Symbol(d),w={safeAreaInsetBottom:C};var N=c({name:d,props:w,setup(a,{slots:o}){const{linkChildren:n}=g(p);return n(),()=>{var e;return u("div",{class:[_(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(e=o.default)==null?void 0:e.call(o)])}}});const V=i(N),[k,z]=r("action-bar-button"),E=h({},S,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var R=c({name:k,props:E,setup(a,{slots:o}){const n=y(),{parent:e,index:s}=j(p),m=l(()=>{if(e){const t=e.children[s.value-1];return!(t&&"isButton"in t)}}),f=l(()=>{if(e){const t=e.children[s.value+1];return!(t&&"isButton"in t)}});return P({isButton:!0}),()=>{const{type:t,icon:B,text:b,color:v,loading:x,disabled:A}=a;return u(I,{class:z([t,{last:f.value,first:m.value}]),size:"large",type:t,icon:B,color:v,loading:x,disabled:A,onClick:n},{default:()=>[o.default?o.default():b]})}}});const Y=i(R);export{p as A,V as a,Y as b};
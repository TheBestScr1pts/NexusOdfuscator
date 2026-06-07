document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),n=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function a(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function l(){let e=["(_==_) ","(math.random()>0 and 1) ","(nil or 0) ","(true and 'NX') "];return e[Math.floor(Math.random()*e.length)]}function _(e){let n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function o(e){let n=e,t={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let r in t){let a=RegExp(r,"g");n=n.replace(a,t[r])}return n}function c(e){let n=o(e),t="";for(let r=0;r<n.length;r++)t+=n[r],r%20==0&&" "===n[r]&&(t+=l());if(!n.trim())return"-- Error";let c=Math.floor(100*Math.random())+30,i="";for(let d=0;d<t.length;d++)i+=t.charCodeAt(d)+c+a()+(d<t.length-1?",":"");let $=_(7),u=_(6),f=_(8),g=_(5),s=_(8),h=_(5),m=_(6),x=_(6),v=_(6),k=`-- v1.0.0 NexusOdfucator
`;return k+=`local NX = {
`,k+=`[0x1] = _G[string.char(112, 114, 105, 110, 116)],
`,k+=`[0x2] = _G[string.char(119, 97, 114, 110)],
`,k+=`[0x3] = task[string.char(119, 97, 105, 116)],
`,k+=`[0x4] = Instance[string.char(110, 101, 119)],
`,k+=`[0x5] = game[string.char(71, 101, 116, 83, 101, 114, 118, 105, 99, 101)],
`,k+=`[0x6] = CFrame[string.char(110, 101, 119)]
`,k+=`}
`,k+=`local ${$} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,k+=`local ${u} = setmetatable({},{__index=function(t,k) if k == "NX" then ${$}[3]("NX Tamper Detected") end if ${$}[k] then return ${$}[k] end return _G[k] or ${$}[4]()[k] end,__newindex=function(t,k,v) ${$}[3]("Error") end,__metatable="NexusOdfucator"})
`,k+=`local ${f}="${i}" local ${g}=${c} local ${s}=""
`,k+=`for ${h} in ${$}[6](${f}, "([^,]+)") do local ${m}=${$}[7](${h}, "%d+") if ${m} then ${s}=${s}..${$}[5](tonumber(${m})-${g}) end end
`,k+=`local ${x},${v}=${u}[1](${s})
`,k+=`if ${x} then ${u}[2](${x},${u}) ${x}() else ${u}[3](tostring(${v})) end`}e.addEventListener("click",()=>{r.value=c(t.value)}),n.addEventListener("click",()=>{t.value="",r.value=""})});

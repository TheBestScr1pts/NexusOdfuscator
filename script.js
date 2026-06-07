document.addEventListener("DOMContentLoaded",()=>{let n=document.getElementById("obfuscateBtn"),e=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function a(){let n="abcdefghijklmnopqrstuvwxyz";return n.charAt(Math.floor(Math.random()*n.length))}function l(){let n=["(_==_) ","(math.random()>0 and 1) ","(nil or 0) ","(true and 'NX') "];return n[Math.floor(Math.random()*n.length)]}function _(n){let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function o(n){let e=n,t={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let r in t){let a=RegExp(r,"g");e=e.replace(a,t[r])}return e}function c(n){let e=o(n),t="";for(let r=0;r<e.length;r++)t+=e[r],r%20==0&&" "===e[r]&&(t+=l());if(!e.trim())return"-- Error";let c=Math.floor(100*Math.random())+30,i="";for(let d=0;d<t.length;d++)i+=t.charCodeAt(d)+c+a()+(d<t.length-1?",":"");let $=_(7),u=_(6),f=_(8),g=_(5),s=_(8),h=_(5),m=_(6),x=_(6),v=_(6),k=`-- v1.0.0 NexusOdfucator
`;return k+=`local NX = {
`,k+=`    [0x1] = _G[string.char(112, 114, 105, 110, 116)],
`,k+=`    [0x2] = _G[string.char(119, 97, 114, 110)],
`,k+=`    [0x3] = task[string.char(119, 97, 105, 116)],
`,k+=`    [0x4] = Instance[string.char(110, 101, 119)],
`,k+=`    [0x5] = game[string.char(71, 101, 116, 83, 101, 114, 118, 105, 99, 101)],
`,k+=`    [0x6] = CFrame[string.char(110, 101, 119)]
`,k+=`}
`,k+=`local ${$} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,k+=`local ${u} = setmetatable({},{__index=function(t,k) if k == "NX" then ${$}[3]("NX Tamper Detected") end if ${$}[k] then return ${$}[k] end return _G[k] or ${$}[4]()[k] end,__newindex=function(t,k,v) ${$}[3]("Error") end,__metatable="NexusOdfucator"})
`,k+=`local ${f}="${i}" local ${g}=${c} local ${s}=""
`,k+=`for ${h} in ${$}[6](${f}, "([^,]+)") do
`,k+=`local ${m}=tonumber(${$}[7](${h}, "%d+"))
`,k+=`if ${m} then ${s}=${s}..${$}[5](${m}-${g}) end
`,k+=`end
`,k+=`local ${x},${v}=${u}[1](${s})
`,k+=`if ${x} then ${u}[2](${x},${u}) ${x}() else ${u}[3](tostring(${v})) end`}n.addEventListener("click",()=>{r.value=c(t.value)}),e.addEventListener("click",()=>{t.value="",r.value=""})});

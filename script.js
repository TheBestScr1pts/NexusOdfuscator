document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function a(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function l(){let e=["(1+1)","(math.random(1,100))","(0)","('NX')"];return e[Math.floor(Math.random()*e.length)]}function _(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function o(e){let t=e,n={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let r in n){let a=RegExp(r,"g");t=t.replace(a,n[r])}return t}function c(e){let t=o(e),n="";for(let r=0;r<t.length;r++)n+=t[r],r%20==0&&" "===t[r]&&(n+=l());if(!t.trim())return"-- Error";let c=Math.floor(100*Math.random())+30,i="";for(let $=0;$<n.length;$++)i+=n.charCodeAt($)+c+a()+($<n.length-1?",":"");let d=_(7),u=_(6),f=_(8),g=_(5),s=_(8),h=_(5),m=_(6),x=_(6),v=_(6),k=`-- v1.0.0 NexusOdfucator
`;return k+=`local NX = {
`,k+=`[0x1] = _G[string.char(112, 114, 105, 110, 116)],
`,k+=`[0x2] = _G[string.char(119, 97, 114, 110)],
`,k+=`[0x3] = task[string.char(119, 97, 105, 116)],
`,k+=`[0x4] = Instance[string.char(110, 101, 119)],
`,k+=`[0x5] = game[string.char(71, 101, 116, 83, 101, 114, 118, 105, 99, 101)],
`,k+=`[0x6] = CFrame[string.char(110, 101, 119)]
`,k+=`}
`,k+=`local ${d} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,k+=`local ${u} = setmetatable({},{__index=function(t,k) if k == "NX" then ${d}[3]("NX Tamper Detected") end if ${d}[k] then return ${d}[k] end return _G[k] or ${d}[4]()[k] end,__newindex=function(t,k,v) ${d}[3]("Error") end,__metatable="NexusOdfucator"})
`,k+=`local ${f}="${i}" local ${g}=${c} local ${s}=""
`,k+=`for ${h} in ${d}[6](${f}, "([^,]+)") do local ${m}=${d}[7](${h}, "%d+") if ${m} then ${s}=${s}..${d}[5](tonumber(${m})-${g}) end end
`,k+=`local ${x},${v}=${u}[1](${s})
`,k+=`if ${x} then ${u}[2](${x},${u}) ${x}() else ${u}[3](tostring(${v})) end`}e.addEventListener("click",()=>{r.value=c(n.value)}),t.addEventListener("click",()=>{n.value="",r.value=""})});

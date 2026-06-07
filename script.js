document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function l(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(){let e=["--[[NX_JUNK]]","--[[PROTECTED]]","--[[NEXUS]]"];return e[Math.floor(Math.random()*e.length)]}function _(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function o(e){let t=e,n={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let r in n){let l=RegExp(r,"g");t=t.replace(l,n[r])}return t}function c(e){let t=o(e),n="";for(let r=0;r<t.length;r++)n+=t[r],r%20==0&&" "===t[r]&&(n+=a());if(!t.trim())return"-- Error";let c=Math.floor(100*Math.random())+30,i="";for(let d=0;d<n.length;d++)i+=n.charCodeAt(d)+c+l()+(d<n.length-1?",":"");let $=_(7),u=_(6),f=_(8),g=_(5),s=_(8),h=_(5),m=_(6),x=_(6),N=_(6),v=`-- v1.0.0 NexusOdfucator
`;return v+=`local NX = {
`,v+=`[0x1] = _G[string.char(112, 114, 105, 110, 116)],
`,v+=`[0x2] = _G[string.char(119, 97, 114, 110)],
`,v+=`[0x3] = task[string.char(119, 97, 105, 116)],
`,v+=`[0x4] = Instance[string.char(110, 101, 119)],
`,v+=`[0x5] = game[string.char(71, 101, 116, 83, 101, 114, 118, 105, 99, 101)],
`,v+=`[0x6] = CFrame[string.char(110, 101, 119)]
`,v+=`}
`,v+=`local ${$} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,v+=`local ${u} = setmetatable({},{__index=function(t,k) if k == "NX" then ${$}[3]("NX Tamper Detected") end if ${$}[k] then return ${$}[k] end return _G[k] or ${$}[4]()[k] end,__newindex=function(t,k,v) ${$}[3]("Error") end,__metatable="NexusOdfucator"})
`,v+=`local ${f}="${i}" local ${g}=${c} local ${s}=""
`,v+=`for ${h} in ${$}[6](${f}, "([^,]+)") do local ${m}=${$}[7](${h}, "%d+") if ${m} then ${s}=${s}..${$}[5](tonumber(${m})-${g}) end end
`,v+=`local ${x},${N}=${u}[1](${s})
`,v+=`if ${x} then ${u}[2](${x},${u}) ${x}() else ${u}[3](tostring(${N})) end`}e.addEventListener("click",()=>{r.value=c(n.value)}),t.addEventListener("click",()=>{n.value="",r.value=""})});

document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function l(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(){let e=["local _ = 1+1 ","if (false) then warn('Junk') end ","local _ = math.random(1,100) ","local _ = 'NX_PROTECTED' "];return e[Math.floor(Math.random()*e.length)]}function o(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function c(e){let t=e,n={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let r in n){let l=RegExp(r,"g");t=t.replace(l,n[r])}return t}function d(e){let t=c(e),n="";for(let r=0;r<t.length;r++)n+=t[r],r%15==0&&(n+=" "+a()+" ");if(!t.trim())return"-- Error";let d=Math.floor(100*Math.random())+30,i="";for(let u=0;u<n.length;u++)i+=n.charCodeAt(u)+d+l()+(u<n.length-1?",":"");let f=o(7),m=o(6),$=o(8),g=o(5),s=o(8),h=o(5),x=o(6),v=o(6),k=o(6),N=`-- v1.0.0 NexusOdfucator
`;return N+=`local NX = {[0x1]=print, [0x2]=warn, [0x3]=task.wait, [0x4]=Instance.new, [0x5]=game.GetService, [0x6]=CFrame.new}
`,N+=`local ${f} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,N+=`local ${m} = setmetatable({},{__index=function(t,k) if k == "NX" then ${f}[3]("NX Tamper Detected") end if ${f}[k] then return ${f}[k] end return _G[k] or ${f}[4]()[k] end,__newindex=function(t,k,v) ${f}[3]("Error") end,__metatable="NexusOdfucator"})
`,N+=`local ${$}="${i}" local ${g}=${d} local ${s}=""
`,N+=`for ${h} in ${f}[6](${$}, "([^,]+)") do
`,N+=`local ${x}=tonumber(${f}[7](${h}, "%d+"))
`,N+=`if ${x} then ${s}=${s}..${f}[5](${x}-${g}) end
`,N+=`end
`,N+=`local ${v},${k}=${m}[1](${s})
`,N+=`if ${v} then ${m}[2](${v},${m}) ${v}() else ${m}[3](tostring(${k})) end`}e.addEventListener("click",()=>{r.value=d(n.value)}),t.addEventListener("click",()=>{n.value="",r.value=""})});
